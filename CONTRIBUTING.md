# Contributing to Tokenzyme Core

Thanks for taking the time to contribute. This document covers how to get set up,
what we expect from a change, and how to get it merged.

By participating you agree to abide by the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Before you start

Read [ARCHITECTURE.md](./ARCHITECTURE.md) first if you have not — this service shares
a database with the indexer and consumes generated code from the contracts
repository, and neither is obvious from the source alone.

Open an issue first for anything beyond a typo or an obvious bug fix, especially
changes to the GraphQL schema or the Prisma models.

Good first contributions:

- tests (there are none yet — see below);
- rate limiting and GraphQL query-complexity limits;
- anything listed under *Deployment notes* in [SECURITY.md](./SECURITY.md);
- documentation.

**Found a vulnerability?** Do not open an issue or a PR. Follow the private
disclosure process in [SECURITY.md](./SECURITY.md).

## Development setup

Requirements: Node.js 24+, Corepack, and a Postgres 17 server.

```bash
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres --name postgres postgres:17.5
corepack enable
yarn
cp .env.template .env   # then fill it in — every variable is documented inline
yarn prisma:migrate
yarn start:dev
```

You do **not** need the contracts repository checked out. The TypeChain bindings in
`src/generated/typechain` are committed.

You **do** want the indexer running against the same database if you are touching
anything that reads tokens or trades — otherwise those tables will be empty.

```bash
yarn lint     # ESLint
yarn format   # Prettier
yarn build    # compile to ./dist
```

## Making a change

1. Fork the repository and branch off `main`.
2. Make your change. Keep it focused — one concern per pull request.
3. Run `yarn build`, `yarn lint` and `yarn format` before pushing.
4. Open a pull request describing what changed and why.

### Coding conventions

- ESLint (Airbnb + strict type-checked) and Prettier are enforced. Run them.
- **No default exports** — `import/no-default-export` is on.
- Explicit return types and member accessibility are required on everything.
- Path aliases: `@core/*`, `@cloud/*`, `@domains/*`, `@prisma`, `@typechain`.
  Prefer them over deep relative paths.
- New features go in a domain under `src/domains/<name>/` following the existing
  shape: a `graphql/` layer (resolver, inputs, objects) over a `services/` layer,
  wired through a module. Resolvers stay thin; logic lives in services.
- Read configuration through `AppConfig`, not `process.env`. Variables without a
  default are required and fail fast at startup — that is deliberate. The one
  exception is `WebSocketService`, whose gateway options are evaluated before the
  Nest container exists.
- Use DataLoaders for anything that would otherwise N+1 across a GraphQL list.

### Database changes

Core defines the **whole** database schema. Its migrations create every table — the
ones core writes (`comments`, `signature_messages`) and the ones the indexer fills
(`accounts`, `tokens`, `trades`, `social_media`, `dex_liquidities`). The indexer
creates nothing; it writes rows into tables that already exist.

```bash
yarn prisma:migrate              # create a migration and apply it
yarn prisma:migrate:create-only  # create one without applying
```

- Both services must resolve to the same schema, `public`. **Never add `?schema=` to
  `DB_URL`** — Subsquid ignores it and always uses `public`, so setting it here makes
  the two write to different schemas and every token query silently returns nothing.
- Changing a table the indexer writes into means changing
  [`tokenzyme-indexer`](https://github.com/tokenzyme/tokenzyme-indexer)'s
  `schema.graphql` too. The two are synchronized by hand and nothing warns you if
  they drift — call it out explicitly in your PR.
- Never run `yarn prisma:migrate:reset` against a database the indexer is using — it
  drops the tables the indexer is writing into.
- Commit the generated migration together with the schema change.

### Generated code

`src/generated/` is generated and committed. Never hand-edit it.

- `src/generated/prisma` — `yarn prisma:generate`. Needs a running, migrated
  database, because `--sql` validates the queries in `prisma/sql/`.
- `src/generated/typechain` — produced by `yarn contracts:compile` in
  **tokenzyme-contracts**, which copies it here. It cannot be regenerated from this
  repository, and that command requires the two repositories checked out as
  siblings.

### Changes that affect the clients

The GraphQL schema is generated from the resolvers at runtime, and
[`tokenzyme-app`](https://github.com/tokenzyme/tokenzyme-app) and
[`tokenzyme-mobile`](https://github.com/tokenzyme/tokenzyme-mobile) generate their
types by introspecting a **running** instance. Removing or renaming a field breaks
both until they regenerate. Flag any schema change in your PR description.

### On tests

This repository has no test suite. That is a gap, not a policy. A PR that
establishes one — even covering a single service — is very welcome, and worth
opening an issue to discuss the approach first.

## Dependencies

Dependabot opens **one grouped pull request per ecosystem, once a month**, containing
every minor and patch bump. Review it, check CI, merge.

**Major bumps are ignored by configuration and are the developer's job.** A major is a
migration: bumping the version in the manifest does none of the work, it just turns the
build red. When you want one, do it deliberately — read the upstream migration guide,
change the code it requires, and land it as its own reviewed pull request:

```bash
yarn up <package>@<version>
yarn build && yarn lint
```

Two things that still get through, on purpose or by accident:

- **Security updates ignore this policy**, which is intended. If a vulnerability's only
  fix is in a major, Dependabot proposes it regardless. Nothing merges itself — it
  arrives as a pull request, CI runs on it, and a human decides.
- **Packages below `1.0`.** Semver says any `0.x` bump may break, but Dependabot
  classifies `0.20 -> 0.21` as a minor, so it lands in the grouped PR. Give those
  entries a closer look than the rest.

## Review

A maintainer will review your PR. Please be patient, and be prepared to justify
design decisions.

## License

By contributing, you agree that your contributions are licensed under the
[Apache License 2.0](./LICENSE) that covers this project.
