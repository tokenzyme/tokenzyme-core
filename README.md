# Tokenzyme Core

The GraphQL API for **Tokenzyme**, a permissionless token launchpad for EVM chains.
It serves the indexed on-chain data to the web and mobile clients, and owns the
off-chain features the chain does not cover — comments, image processing, and
wallet-signature authentication.

Built with NestJS, Fastify, Apollo Server and Prisma.

> [!TIP]
> **New to the project?** Start with [ARCHITECTURE.md](./ARCHITECTURE.md). It covers
> all five Tokenzyme repositories, how data flows between them, and how to bring the
> whole stack up locally. This README covers only this service.

## Table of contents

- [What it does](#what-it-does)
- [Domains](#domains)
- [The shared database](#the-shared-database)
- [Getting started](#getting-started)
- [Prisma](#prisma)
- [Generated code](#generated-code)
- [Running with Docker](#running-with-docker)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## What it does

Core does **not** sit between users and the chain. Launching a token and trading
against the bonding curve happen wallet-to-contract; this service is never involved
and could not censor a trade if it wanted to.

What it does instead:

- **Serves indexed data.** Tokens, trades, holders and price candles, read from the
  tables [`tokenzyme-indexer`](https://github.com/tokenzyme/tokenzyme-indexer)
  writes, exposed over GraphQL with DataLoader batching.
- **Owns off-chain state.** Comments on tokens, and the signature nonces that back
  wallet authentication.
- **Authenticates wallets.** Issues a nonce, verifies the signature, returns a JWT.
- **Processes images.** Token logos are uploaded, normalized to WebP with `sharp`,
  and stored in S3-compatible object storage.
- **Reads the native token price.** From a Chainlink-compatible feed, for USD
  display.
- **Pushes comment updates** over Socket.IO.

Endpoints:

| Path | Purpose |
| --- | --- |
| `POST /graphql` | The API. Apollo landing page is served on `GET` in development. |
| `POST /images/processTokenLogo` | Multipart logo upload — JPEG/PNG, max 500 KB, returns WebP. |
| Socket.IO on `:3000` | `tokens:<address>:comments` |

## Domains

Business logic is organized under `src/domains/`, each with a `graphql/` layer
(resolvers, inputs, objects) over a `services/` layer.

| Domain | Responsibility |
| --- | --- |
| `account` | Wallet addresses. |
| `comment` | Comments on tokens. Requires a signature-backed JWT. |
| `image` | Token logo upload and normalization. |
| `price` | Native token price from the Chainlink feed. |
| `signatureMessage` | Nonces issued for wallet sign-in. |
| `token` | Token queries, top holders, search. |
| `trade` | Trade history and OHLC candles. |

Supporting layers:

- `src/core/` — config, auth guards, Prisma provider, GraphQL scalars and
  DataLoaders, exception filters, the WebSocket gateway.
- `src/cloud/` — the S3-compatible storage client.
- `src/generated/` — Prisma Client and TypeChain bindings. Generated, committed,
  never hand-edited.

### Authentication

There is one identity: the **wallet address**.

1. The client requests a `SignatureMessage` — a short-lived nonce for its address.
2. The user signs it in their wallet.
3. Core verifies the signature and issues a JWT.
4. The client sends `Authorization: Bearer <token>`; the `IsAuthenticated` guard
   resolves it to an `Account`.

That JWT authorizes off-chain actions attributable to an address, such as posting a
comment. It carries no on-chain authority. Reading is entirely public.

Two SQL queries in `prisma/sql/` (`listTopHoldersQuery`, `listTradeCandlesQuery`) are
handwritten and consumed through Prisma's typed SQL — they are aggregations Prisma's
query builder cannot express efficiently.

## The shared database

This is the part that surprises people, so it is worth stating plainly.

**Core and the indexer share one Postgres database, and one schema: `public`.**

**Core owns the whole schema.** The migrations here create every table — both the
ones core writes (`comments`, `signature_messages`) and the ones the indexer fills
(`accounts`, `tokens`, `trades`, `social_media`, `dex_liquidities`). Core writes only
to its own, but it defines all of them, so `prisma/models/` is the single description
of the database.

The indexer creates nothing. Apply these migrations **before** starting it, or it has
nowhere to write.

Consequences:

- **Never add `?schema=` to `DB_URL`.** Prisma targets whatever it names, defaulting
  to `public`. Subsquid ignores the parameter and always uses `public`. Set it here
  and the two services quietly use different schemas: core starts fine, and every
  token query returns nothing.
- The indexer's `schema.graphql` and `prisma/models/` describe the same tables and
  are kept in sync **by hand**. Nothing warns you if they drift.
- Point the two services at different databases and you get the same silent
  emptiness.
- **Never run `yarn prisma:migrate:reset` against a database the indexer is using** —
  it drops the tables the indexer is writing into.

## Getting started

Requirements: Node.js 24+, Corepack, and a Postgres 17 server.

```bash
# Start Postgres if you do not have one
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres --name postgres postgres:17.5

# Enable Corepack to use the Yarn version configured in the project
corepack enable

# Install all dependencies
yarn

# Copy the environment template and fill it in
cp .env.template .env

# Create the database schema — do this before starting the indexer
yarn prisma:migrate
```

Every variable is documented inline in [`.env.template`](./.env.template). The ones
that need real values before the server will start:

| Variable | Notes |
| --- | --- |
| `DB_URL` | Must **not** carry a `?schema=` parameter — see above. |
| `JWT_SECRET` | Generate with `openssl rand -base64 48`. |
| `JWT_EXPIRES_IN` | JWT lifetime in days, e.g. `7`. |
| `RPC_URL` | Must match the network the indexer and clients use. |
| `PRICE_FEED_ADDRESS` | Chainlink-compatible feed for the native token. |
| `STORAGE_*` | Any S3-compatible provider — AWS S3, DigitalOcean Spaces, MinIO, Cloudflare R2. |
| `CORS_ORIGIN` | **Required when `NODE_ENV=production`.** Empty in development accepts any origin. |

Then run it:

```bash
yarn start:dev      # watch mode
yarn start:debug    # watch mode with the debugger attached
```

GraphQL is at `http://localhost:3000/graphql`.

```bash
yarn lint      # ESLint
yarn format    # Prettier
yarn build     # compile to ./dist
```

> [!NOTE]
> There is no test suite yet. See [CONTRIBUTING.md](./CONTRIBUTING.md#on-tests).

## Prisma

```bash
yarn prisma:format               # format schema.prisma and the model files
yarn prisma:generate             # regenerate the client into src/generated/prisma
yarn prisma:migrate              # create a migration and apply it
yarn prisma:migrate:create-only  # create a migration without applying it
yarn prisma:migrate:deploy       # apply pending migrations (used in the container)
yarn prisma:migrate:reset        # drop and recreate — see the warning above
```

Models are split across `prisma/models/*.prisma` and composed by `prisma/schema.prisma`.

`yarn prisma:generate` runs `prisma generate --sql`, which validates the handwritten
queries in `prisma/sql/` against a live database — so **it needs Postgres running and
migrated**. Plain `yarn prisma generate` works without a database but will not emit
the typed SQL helpers the code imports.

## Generated code

Two directories under `src/generated/` are generated and committed. Never edit them
by hand.

| Directory | Generated by |
| --- | --- |
| `src/generated/prisma` | `yarn prisma:generate` in this repository. |
| `src/generated/typechain` | `yarn contracts:compile` in **tokenzyme-contracts**, which copies the output here. |

> [!IMPORTANT]
> The TypeChain bindings cannot be regenerated from this repository. They are
> produced by `yarn contracts:compile` in
> [`tokenzyme-contracts`](https://github.com/tokenzyme/tokenzyme-contracts), which
> `cp -Rf`s them into `../tokenzyme-core/src/generated/typechain`. That command
> requires the two repositories to be checked out as **siblings**. If you only need
> to build core, the committed bindings are sufficient — you do not need the
> contracts repository at all.

## Running with Docker

`compose.yaml` brings up Postgres and this service on a shared external network that
the indexer and app also join:

```bash
docker network create tokenzyme
docker compose up -d
```

It reads values from `.env`. Before running this anywhere real, set
`POSTGRES_PASSWORD`, `CORS_ORIGIN` and `JWT_SECRET`.

To build and push an image, set `DOCKER_IMAGE` to your own fully-qualified tag — it
defaults to a bare local `tokenzyme-core:latest`, which is fine for local use but is
not pushable anywhere. Log in to your registry first; the scripts do not do it for you.

```bash
export DOCKER_IMAGE=registry.example.com/you/tokenzyme-core:latest
docker login registry.example.com
yarn image:build
yarn image:publish
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Contributions are welcome — please open an
issue before starting on anything substantial.

## Security

Do **not** open a public issue for a vulnerability. Follow the disclosure process in
[SECURITY.md](./SECURITY.md).

## Related repositories

| Repository | Role |
| --- | --- |
| [tokenzyme-contracts](https://github.com/tokenzyme/tokenzyme-contracts) | The on-chain protocol. |
| [tokenzyme-indexer](https://github.com/tokenzyme/tokenzyme-indexer) | Indexes contract events into the database this service reads. |
| [tokenzyme-core](https://github.com/tokenzyme/tokenzyme-core) | This repository. |
| [tokenzyme-app](https://github.com/tokenzyme/tokenzyme-app) | React web client. |
| [tokenzyme-mobile](https://github.com/tokenzyme/tokenzyme-mobile) | Flutter mobile client. |

## License

Licensed under the [Apache License 2.0](./LICENSE). See [NOTICE](./NOTICE) for
attribution requirements.

### Trademarks

The license covers the source code. It does **not** grant rights to the "Tokenzyme"
name, logo, or other brand assets. You are free to fork and run this software, but
please do so under your own name and branding.
