import { BadRequestException, ConflictException, Logger, Provider } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import snakeCase from 'lodash.snakecase';

import { AppConfig } from '@core/AppConfig';
import { PrismaClient } from '@prisma';
import { PrismaClientKnownRequestError } from '@prisma/runtime/library';

interface QueryArgs {
  model: string;
  query: (args: unknown) => Promise<unknown>;
  args: unknown;
}

const queryWrapper = async ({ model, query, args }: QueryArgs): Promise<unknown> => {
  try {
    return await query(args);
  } catch (err: unknown) {
    if (err instanceof PrismaClientKnownRequestError) {
      switch (err.code) {
        case 'P2002': {
          const target = err.meta?.target;
          if (Array.isArray(target)) {
            throw new ConflictException(`${snakeCase(model)}_${target.join('_')}_already_exists`);
          }
          throw new ConflictException(`${snakeCase(model)}_already_exists`);
        }
        case 'P2003': {
          const constraint = err.meta?.constraint as string | undefined;
          throw new BadRequestException(`${snakeCase(model)}_${constraint ?? 'constraint'}_not_found`);
        }
        case 'P2025':
          throw new BadRequestException(`${snakeCase(model)}_not_found`);
        default:
          throw err;
      }
    }
    throw err;
  }
};

export const prismaProvider: Provider = {
  provide: PrismaClient,
  useFactory: (appConfig: AppConfig) => {
    const dbUrl = new URL(appConfig.dbUrl);
    const adapter = new PrismaPg(
      { connectionString: appConfig.dbUrl },
      { schema: dbUrl.searchParams.get('schema') ?? undefined },
    );
    const prisma = new PrismaClient({
      adapter,
      log: appConfig.logPrisma ? [{ emit: 'event', level: 'query' }] : [],
    });
    if (appConfig.logPrisma) {
      const logger = new Logger('PrismaClient');
      prisma.$on('query', (e) => {
        logger.log(`Query: ${e.query} - ${e.params} - ${e.duration}ms`);
      });
    }
    return prisma.$extends({
      query: {
        $allModels: {
          create: queryWrapper,
          createMany: queryWrapper,
          update: queryWrapper,
          upsert: queryWrapper,
          findFirstOrThrow: queryWrapper,
          findUniqueOrThrow: queryWrapper,
        },
      },
    });
  },
  inject: [AppConfig],
};
