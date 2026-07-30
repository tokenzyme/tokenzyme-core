# BUILD STEP

FROM node:25-alpine AS build

ARG NODE_ENV="development"
ARG PRISMA_SKIP_POSTINSTALL_GENERATE="true"
ARG PRISMA_CLI_BINARY_TARGETS="linux-musl-openssl-3.0.x"

WORKDIR /usr/src/tokenzyme-core

COPY .yarnrc.yml nest-cli.json package.json tsconfig.json yarn.lock ./
COPY prisma prisma/
COPY src src/

RUN corepack enable
RUN yarn install && yarn build

# MAIN STEP

FROM node:25-alpine

ARG NODE_ENV="production"

WORKDIR /usr/src/tokenzyme-core

COPY .yarnrc.yml package.json yarn.lock ./
COPY prisma prisma/

RUN corepack enable
RUN yarn workspaces focus --production

COPY --from=build /usr/src/tokenzyme-core/dist ./dist

EXPOSE 3000

CMD ["sh", "-c", "yarn dlx prisma migrate deploy && yarn start:prod"]
