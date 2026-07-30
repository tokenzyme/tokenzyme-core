# Security Policy

## Reporting a vulnerability

**Do not open a public issue, pull request or discussion for a security
vulnerability.**

Report it through GitHub's [private vulnerability reporting](https://github.com/tokenzyme/tokenzyme-core/security/advisories/new)
— the **Security** tab, then **Report a vulnerability**. That opens a private
advisory only you and the maintainers can see.

Please include a description of the issue, its impact, and steps to reproduce.

### What to expect

| Stage                                        | Target       |
| -------------------------------------------- | ------------ |
| Acknowledgement of your report               | 72 hours     |
| Initial assessment and severity triage       | 7 days       |
| Status update cadence while we work on a fix | every 7 days |

We will credit you in the advisory unless you ask us not to. There is no formal
bug bounty program at this time.

If the vulnerability is in the smart contracts rather than this service, report it
through [tokenzyme-contracts](https://github.com/tokenzyme/tokenzyme-contracts/blob/main/SECURITY.md)
instead — that is where the funds are.

## Supported versions

Only the `main` branch receives security fixes. There are no long-term support
branches.

## Trust model

Worth being explicit about, because it bounds how much damage a compromise of this
service can do.

**This API cannot move funds.** Launching a token and trading against the bonding
curve happen wallet-to-contract. Core is never in that path, holds no private keys,
and has no privileged role on the launchpad. An attacker with full control of this
service could serve false data and forge comments — but could not touch a balance,
a trade, or a token.

**It can lie about what happened on-chain.** Clients render token lists, prices,
holder tables and trade history from this API. Someone who controls it, or the
database behind it, can fabricate all of it. Users who need certainty should verify
against the chain directly.

## Deployment notes

Properties of the current design. None are undisclosed bugs, but each will hurt you
if you deploy without knowing about it.

### CORS must be configured in production

`CORS_ORIGIN` sets the allowed origin for both HTTP and the WebSocket gateway. Core
**refuses to start** when `NODE_ENV=production` and it is unset. Left empty in
development, any origin is accepted — do not run that configuration on a public host.

### JWTs cannot be revoked

Tokens are stateless and valid until `JWT_EXPIRES_IN` elapses. There is no
deny-list and no session store. Keep the lifetime short enough that a leaked token
has a bounded blast radius, and treat `JWT_SECRET` rotation as the only way to
invalidate everything at once.

Generate the secret with `openssl rand -base64 48`. A weak or shared secret lets
anyone mint tokens for any address.

### The database is a trust boundary for the whole system

Core and the indexer share one Postgres database. Write access to it means the
ability to forge token and trade history that this API serves as authentic. Do not
expose Postgres beyond the application network, and change the default
`POSTGRES_PASSWORD` in `compose.yaml`.

Never run `yarn prisma:migrate:reset` against a database the indexer is using — it
drops tables core does not own.

### User-supplied content is not sanitized here

Comment text is length-limited and stored as-is. Token metadata — names, symbols,
descriptions, logo URLs, social links — originates from whoever launched the token
on-chain, where only lengths and URL prefixes are validated. Impersonating an
existing project is trivial and nothing on this side prevents it.

Clients must escape all of it on render, and must not fetch `logoUrl` server-side
without SSRF protection.

### Image upload

`POST /images/processTokenLogo` is **unauthenticated**. It accepts JPEG and PNG up
to 500 KB, one file per request, and returns a normalized WebP. There is no rate
limiting in this service — put it behind a proxy that provides one, or it is a cheap
way to burn your CPU.

### No rate limiting anywhere

Neither GraphQL nor the REST endpoints are throttled, and GraphQL query depth and
complexity are unbounded. Deploy behind a reverse proxy or gateway that enforces
both.

### Object storage credentials

`STORAGE_ACCESS_KEY` and `STORAGE_SECRET_KEY` should belong to a key scoped to the
single bucket in `STORAGE_BUCKET`, with no permissions beyond it.
