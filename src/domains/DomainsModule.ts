import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AccountModule } from './account/AccountModule';
import { CommentModule } from './comment/CommentModule';
import { ImageModule } from './image/ImageModule';
import { PriceModule } from './price/PriceModule';
import { SignatureMessageModule } from './signatureMessage/SignatureMessageModule';
import { TokenModule } from './token/TokenModule';
import { TradeModule } from './trade/TradeModule';

import { RequestContext } from '@core/graphql/RequestContext';
import { DataLoaderRegistryFactory } from '@core/graphql/dataLoaders/DataLoaderRegistryFactory';

const modules = [
  AccountModule,
  CommentModule,
  ImageModule,
  PriceModule,
  SignatureMessageModule,
  TokenModule,
  TradeModule,
];

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [DataLoaderRegistryFactory],
      useFactory: (dataLoaderRegistryFactory: DataLoaderRegistryFactory) => ({
        autoSchemaFile: true,
        buildSchemaOptions: {
          numberScalarMode: 'integer',
        },
        cache: 'bounded',
        context: (): RequestContext => ({ loaders: dataLoaderRegistryFactory.create() }),
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
      }),
    }),
    ...modules,
  ],
  exports: modules,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class DomainsModule {}
