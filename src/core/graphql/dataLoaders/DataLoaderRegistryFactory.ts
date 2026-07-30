import { Injectable } from '@nestjs/common';

import { DataLoaderRegistry } from './DataLoaderRegistry';

import { PrismaClient } from '@prisma';

@Injectable()
export class DataLoaderRegistryFactory {
  public constructor(private readonly prisma: PrismaClient) {}

  public create(): DataLoaderRegistry {
    return new DataLoaderRegistry(this.prisma);
  }
}
