import 'dotenv/config';
import 'json-bigint-patch';

import multipart from '@fastify/multipart';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Logger } from 'nestjs-pino';

import { MainModule } from './MainModule';

import { AppConfig } from '@core/AppConfig';
import { LogErrorFilter } from '@core/filters/LogErrorFilter';

process.env.TZ = 'UTC';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(MainModule, new FastifyAdapter(), { bufferLogs: true });
  const appConfig = app.get(AppConfig);
  app.useLogger(app.get(Logger));
  app.useGlobalFilters(new LogErrorFilter());
  app.enableCors({
    origin: appConfig.corsOrigin === '' ? true : appConfig.corsOrigin,
    credentials: true,
  });
  app.useWebSocketAdapter(new IoAdapter(app));
  await app.register(multipart, {
    limits: {
      // Max number of non-file fields
      fields: 0,
      // Max number of file fields
      files: 1,
      // Max file size in bytes (500 KB)
      fileSize: 500 * 1024,
    },
  });
  await app.listen({ host: '0.0.0.0', port: 3000 });
}

// eslint-disable-next-line no-void
void bootstrap();
