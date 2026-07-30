import { Module } from '@nestjs/common';

import { SignatureMessageResolver } from './graphql/SignatureMessageResolver';
import { SignatureMessageService } from './services/SignatureMessageService';

@Module({
  providers: [SignatureMessageResolver, SignatureMessageService],
  exports: [SignatureMessageService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SignatureMessageModule {}
