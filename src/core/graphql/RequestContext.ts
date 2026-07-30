import { FastifyReply } from 'fastify';

import { DataLoaderRegistry } from './dataLoaders/DataLoaderRegistry';

export interface RequestContext {
  loaders: DataLoaderRegistry;
  reply?: FastifyReply;
}
