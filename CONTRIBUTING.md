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

Core owns **only** its own tables — `comments`, `signature_messages`. The models for
`Token`, `Trade`, `Account`, `SocialMedia` and `DexLiquidity` mirror tables the
**indexer** creates and are read-only here.

```bash
yarn prisma:migrate              # create a migration and apply it
yarn prisma:migrate:create-only  # create one without applying
```

- Never write a migration that creates, alters or drops an indexer-owned table.
- Never run `yarn prisma:migrate:reset` against a database the indexer is using.
- Changing an indexer-owned model here means the change belongs in
  [`tokenzyme-indexer`](https://github.com/tokenzyme/tokenzyme-indexer)'s
  `schema.graphql` first. The two are synchronized by hand and nothing warns you if
  they drift — call it out explicitly in your PR.
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

## Review

A maintainer will review your PR. Please be patient, and be prepared to justify
design decisions.

## License

By contributing, you agree that your contributions are licensed under the
[Apache License 2.0](./LICENSE) that covers this project.
