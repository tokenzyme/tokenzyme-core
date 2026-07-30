## What does this change?

<!-- Describe the change and why it is needed. Link the issue it addresses. -->

Closes #

## Type of change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Tooling / CI

## Impact on consumers

- [ ] No change to the GraphQL schema
- [ ] Changes the GraphQL schema — both clients need regenerated types

## Database

- [ ] No database change
- [ ] Migration added for a table **core owns** (`comments`, `signature_messages`)
- [ ] Touches a table the **indexer owns** — explain below why this is correct

<!-- Token, Trade, Account, SocialMedia and DexLiquidity are read-only here. They are
     created by tokenzyme-indexer via TypeORM. A schema change to those belongs in
     that repository's schema.graphql first, then mirrored into prisma/models/. -->

## Checklist

- [ ] `yarn build` passes
- [ ] `yarn lint` passes
- [ ] `yarn format` has been run
- [ ] Configuration is read through `AppConfig`, not `process.env`
- [ ] New environment variables are documented in `.env.template` and added to `compose.yaml`
- [ ] Generated code under `src/generated/` was regenerated rather than hand-edited
- [ ] Migrations are committed alongside the schema change
- [ ] This is not a security fix (those go through private disclosure — see SECURITY.md)
