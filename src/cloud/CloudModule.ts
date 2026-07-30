import { Global, Module } from '@nestjs/common';

import { StorageClient } from './storage/StorageClient';

@Global()
@Module({
  providers: [StorageClient],
  exports: [StorageClient],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CloudModule {}
