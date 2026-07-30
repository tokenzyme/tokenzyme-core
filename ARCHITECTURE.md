# Tokenzyme Architecture

This document describes the whole Tokenzyme system — all five repositories, how they
fit together, and the order in which to bring them up. It lives here in
`tokenzyme-core` because core sits at the centre of the stack; the other
repositories link back to it.

## Table of contents

- [What Tokenzyme is](#what-tokenzyme-is)
- [The repositories](#the-repositories)
- [How data flows](#how-data-flows)
- [The shared database](#the-shared-database)
- [Code generation and coupling](#code-generation-and-coupling)
- [Authentication](#authentication)
- [Networks](#networks)
- [Running the whole stack locally](#running-the-whole-stack-locally)
- [Deployment topology](#deployment-topology)

## What Tokenzyme is

A permissionless token launchpad for EVM chains.

Anyone can launch an ERC-20 token. It starts trading immediately against a bonding
curve held by the launchpad contract — no liquidity provider, no listing process.
As people buy, the price rises along a constant-product curve. When the curve's
supply sells out, the contract automatically creates a concentrated-liquidity DEX
pool, seeds it with the accumulated proceeds and the held-back token supply, and
unlocks the token for free trading.

Everything that matters — the tokens, the curve, the trades, the migration — is
on-chain. The off-chain services exist to make that data *readable*: you cannot
render a price chart by querying an RPC node for every historical log.

## The repositories

Tokenzyme is split across five repositories rather than a monorepo.

| Repository | Stack | Role | License |
| --- | --- | --- | --- |
| [tokenzyme-contracts](https://github.com/tokenzyme/tokenzyme-contracts) | Solidity, Hardhat | The protocol. The only source of truth. | MIT |
| [tokenzyme-indexer](https://github.com/tokenzyme/tokenzyme-indexer) | TypeScript, Subsquid, TypeORM | Reads contract events into Postgres; broadcasts live updates. | Apache-2.0 |
| [tokenzyme-core](https://github.com/tokenzyme/tokenzyme-core) | TypeScript, NestJS, Fastify, Apollo, Prisma | GraphQL API. Serves indexed data plus off-chain features. | Apache-2.0 |
| [tokenzyme-app](https://github.com/tokenzyme/tokenzyme-app) | TypeScript, React, Vite, Apollo | Web client. | — |
| [tokenzyme-mobile](https://github.com/tokenzyme/tokenzyme-mobile) | Dart, Flutter, Riverpod | Mobile client. | — |

The layering is strict in one direction: contracts know nothing about the indexer,
the indexer knows nothing about the API, and the API knows nothing about the
clients.

## How data flows

```
                            ┌──────────────────────┐
                            │   EVM chain (Sonic)  │
                            │                      │
                            │   Launchpad.sol      │
                            │   Token.sol × N      │
                            └───────┬──────┬───────┘
                       events       │      │       transactions
                                    │      │       (launch / buy / sell)
                                    ▼      │
                        ┌───────────────┐  │
                        │    indexer    │  │
                        │   (Subsquid)  │  │
                        └───┬───────┬───┘  │
                     writes │       │ Socket.IO :3002
                            ▼       │      │
                    ┌───────────────┴──┐   │
                    │    Postgres      │   │
                    │                  │   │
                    │ public.*     ←── indexer owns
                    │ tokenzyme.*  ←── core owns
                    └────────┬─────────┘   │
                      reads  │             │
                             ▼             │
                    ┌──────────────────┐   │
                    │      core        │   │
                    │  GraphQL :3000   │   │
                    │  Socket.IO       │   │
                    └────────┬─────────┘   │
                             │             │
                 ┌───────────┴──────┬──────┘
                 ▼                  ▼
          ┌────────────┐     ┌────────────┐
          │    app     │     │   mobile   │
          │  (React)   │     │ (Flutter)  │
          └────────────┘     └────────────┘
```

Reads and writes take different paths, and this is the key thing to understand:

**Writes go straight to the chain.** When a user launches a token or places a
trade, the client builds and signs the transaction in the user's wallet and submits
it to the RPC endpoint. Neither the API nor the indexer is involved, and neither
could censor or forge a trade if it wanted to.

**Reads come from the API.** The client queries core over GraphQL, which reads rows
the indexer materialized. Live updates arrive over two separate WebSocket channels:
trades and price from the indexer on port 3002, comments from core.

The lag between a transaction confirming and it appearing in the UI is the
indexer's batch interval plus `FINALITY_CONFIRMATION` blocks.

### The events that define the data model

The contract's events are the protocol's public interface. Six of them drive
everything downstream:

| Event | Becomes |
| --- | --- |
| `TokenLaunched` | A `Token` row plus its `SocialMedia` and the creator's `Account`. |
| `MarketDataCreated` | Initial supply, reserves and opening price. |
| `TokensBought` / `TokensSold` | A `Trade` row. |
| `MarketDataUpdated` | Updated reserves and current price. |
| `TokenMigrated` | `dexPoolAddress`, `migratedAt`, and a `DexLiquidity` row. |

Change an event signature and you change its topic hash — which silently breaks the
indexer until its ABI copy is regenerated. See
[Code generation and coupling](#code-generation-and-coupling).

## The shared database

**The indexer and core share one Postgres database, split by schema.**

| Schema | Owned by | Tables |
| --- | --- | --- |
| `public` | indexer | `accounts`, `tokens`, `trades`, `social_media`, `dex_liquidities` |
| `tokenzyme` | core | `comments`, `signature_messages` |

The indexer creates its tables through TypeORM on first run. Core creates its own
through Prisma migrations. **Neither migrates the other's tables.**

Core mirrors the indexer's tables in its Prisma schema so it can query and join them
— but it only ever reads them. Those Prisma models have no migrations behind them;
they describe tables that already exist.

Two consequences worth internalising:

- The two schemas are kept in sync **by hand**. Change `schema.graphql` in the
  indexer and you must mirror it in core's `prisma/models/`. Nothing will warn you
  if they drift; you will find out through a runtime error.
- Point the two services at different databases and core will start fine, but every
  token query will come back empty.

`DB_URL` differs accordingly: core's ends in `?schema=tokenzyme`, the indexer's has
no schema parameter at all.

## Code generation and coupling

Four generated artifacts are committed rather than built on demand. Each one is a
coupling point between repositories, and each is refreshed by a command someone has
to remember to run.

| Artifact | Lives in | Generated from | Command |
| --- | --- | --- | --- |
| TypeChain bindings | `tokenzyme-core/src/generated/typechain`, `tokenzyme-app/src/generated/typechain` | contract ABIs | `yarn contracts:compile` **in tokenzyme-contracts** |
| Prisma Client | `tokenzyme-core/src/generated/prisma` | `prisma/schema.prisma` | `yarn prisma:generate` in core |
| GraphQL types | `tokenzyme-app/src/generated/graphql`, `tokenzyme-mobile/lib/graphql` | core's live GraphQL schema | `yarn graphql:generate` in app; `build_runner` in mobile |
| Squid models and ABI decoders | `tokenzyme-indexer/src/model/generated`, `src/generated/abi` | `schema.graphql`, `abi/launchpad.json` | `yarn generate:models`, `yarn generate:abi` |

Two of these deserve a warning.

> [!IMPORTANT]
> **`yarn contracts:compile` writes outside its own repository.** It runs `cp -Rf`
> into `../tokenzyme-core/src/generated/typechain` and
> `../tokenzyme-app/src/generated/typechain`, and fails if those sibling directories
> do not exist. Working on the contracts alone? Use `yarn hardhat compile` instead.

> [!IMPORTANT]
> **`tokenzyme-indexer/abi/launchpad.json` does not update itself.** It is a manual
> copy of the launchpad ABI. Change an event and forget to copy it over, and the
> indexer keeps running, keeps reporting healthy, and silently indexes nothing for
> that event.

Regenerating GraphQL types requires core to be **running**, since codegen
introspects the live schema rather than a checked-in SDL file.

## Authentication

There are two distinct notions of identity, and neither one is an email account.

**Wallet identity (`Account`).** Everything on-chain is keyed by address. Ownership
is proved by signature: the client asks core for a nonce (`SignatureMessage`), the
user signs it in their wallet, core verifies the signature and issues a JWT. That
JWT authorizes off-chain actions attributable to an address — posting a comment,
for instance. It grants no on-chain authority whatsoever.

**No identity at all.** Reading is entirely public. Launching and trading need only
a wallet and gas; the API is not consulted and cannot gate them.

JWTs are bearer tokens sent as `Authorization: Bearer <token>`, verified by the
`IsAuthenticated` guard.

## Networks

The stack is chain-agnostic in principle and has been run on four networks. Every
service must be pointed at the **same** one — a mismatch produces an app that
loads, connects, and shows nothing.

| Network | Chain ID | Notes |
| --- | --- | --- |
| Sonic mainnet | 146 | Where the stack was originally built and tested. |
| Sonic testnet | 14601 | No DEX deployed — token migration cannot complete. |
| Sonic Blaze testnet | 57054 | Legacy. Also no DEX. |
| Local fork | 1337 | A Hardhat fork of mainnet. The only way to exercise migration end to end. |

**There is no published deployment.** This project ships no contract addresses — you
deploy the contracts yourself and point every service at your own launchpad proxy. See
[Deploying](https://github.com/tokenzyme/tokenzyme-contracts#deploying) in the contracts
repository, and [Network requirements](https://github.com/tokenzyme/tokenzyme-contracts#network-requirements)
for what a target chain has to provide.

Each service configures the network independently:

| Service | Variables |
| --- | --- |
| contracts | `--network` flag; parameters per network in `ignition/modules/` |
| indexer | `NETWORK`, `RPC_URL`, `LAUNCHPAD_ADDRESS`, `FROM_BLOCK` |
| core | `RPC_URL`, `PRICE_FEED_ADDRESS` |
| app | `VITE_NETWORK`, `VITE_RPC_URL`, `VITE_LAUNCHPAD_ADDRESS`, `VITE_BLOCK_EXPLORER_URL` |
| mobile | `NETWORK`, `LAUNCHPAD_ADDRESS` |

## Running the whole stack locally

Clone all five repositories as **siblings** — `yarn contracts:compile` depends on
that layout.

```
Tokenzyme/
├── tokenzyme-contracts/
├── tokenzyme-core/
├── tokenzyme-indexer/
├── tokenzyme-app/
└── tokenzyme-mobile/
```

Order matters. Each step depends on the one before it.

**1. Postgres**

```bash
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres --name postgres postgres:17.5
```

**2. A chain**

Either point everything at Sonic testnet (simplest — real data, no DEX), or run a
mainnet fork to exercise migration:

```bash
cd tokenzyme-contracts
yarn && cp .env.template .env
yarn test:fork:startNode          # leave running
yarn contracts:deploy:fork        # in another terminal — note the launchpad proxy address
```

`yarn contracts:deploy:fork` runs `yarn build`, which runs `contracts:compile`,
which populates the TypeChain bindings in core and app. Do this before building
either of them.

**3. Indexer**

```bash
cd tokenzyme-indexer
yarn && cp .env.template .env
# set NETWORK, RPC_URL, LAUNCHPAD_ADDRESS, FROM_BLOCK
yarn start:dev
```

It creates its own tables and starts backfilling. Wait for it to catch up before
expecting the API to return anything.

**4. Core**

```bash
cd tokenzyme-core
yarn && cp .env.template .env
# set DB_URL, JWT_SECRET, RPC_URL, PRICE_FEED_ADDRESS, STORAGE_*
yarn prisma:migrate
yarn start:dev
```

GraphQL is at `http://localhost:3000/graphql`.

**5. App**

```bash
cd tokenzyme-app
yarn && cp .env.example .env
yarn graphql:generate    # needs core running
yarn start:dev
```

**6. Mobile**

```bash
cd tokenzyme-mobile
flutter pub get
cp .env.template .env
flutter run
```

### Ports

| Port | Service |
| --- | --- |
| 3000 | core — GraphQL, REST, WebSocket |
| 3001 | app — production preview |
| 3002 | indexer — WebSocket |
| 5432 | Postgres |
| 8545 | local fork node |
| 5173 | app — Vite dev server |

## Deployment topology

`compose.yaml` files in core and the indexer describe a Docker deployment. They
share an external network so the containers can resolve each other by name:

```bash
docker network create tokenzyme
docker compose -f tokenzyme-core/compose.yaml up -d      # Postgres + API
docker compose -f tokenzyme-indexer/compose.yaml up -d   # indexer
docker compose -f tokenzyme-app/compose.yaml up -d       # web client
```

Postgres is defined only in core's compose file; the indexer joins the same network
and connects to that container by hostname.

Things to change before running this anywhere real:

- **`POSTGRES_PASSWORD`** — defaults to `postgres`.
- **`CORS_ORIGIN`** in core and the indexer — unset means any origin is accepted.
  Core refuses to start without it when `NODE_ENV=production`.
- **`JWT_SECRET`** — generate with `openssl rand -base64 48`.
- The container registry in each `package.json`'s `image:build` and `image:publish`
  scripts points at the Tokenzyme registry. Point it at your own.

The launchpad's `feeRecipient` also defaults to the Tokenzyme protocol address in
`ignition/modules/`. Change it before deploying your own contracts — it receives
protocol fees *and* the LP position minted at migration.
