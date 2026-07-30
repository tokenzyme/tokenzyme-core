import { Global, Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

import { AppConfig } from './AppConfig';
import { AuthModule } from './auth/AuthModule';
import { DataLoaderRegistryFactory } from './graphql/dataLoaders/DataLoaderRegistryFactory';
import { prettyStream } from './pinoPretty';
import { prismaProvider } from './prismaProvider';
import { WebSocketModule } from './webSocket/WebSocketModule';

@Global()
@Module({
  imports: [
    LoggerModule.forRootAsync({
      inject: [AppConfig],
      useFactory: (appConfig: AppConfig) => {
        return {
          pinoHttp: {
            autoLogging: false,
            level: appConfig.logLevel,
            serializers: { req: (): undefined => undefined },
            stream: prettyStream,
          },
        };
      },
    }),
    AuthModule,
    WebSocketModule,
  ],
  providers: [AppConfig, DataLoaderRegistryFactory, prismaProvider],
  exports: [AuthModule, WebSocketModule, AppConfig, DataLoaderRegistryFactory, prismaProvider],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CoreModule {}
