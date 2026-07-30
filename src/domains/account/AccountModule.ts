import { Module } from '@nestjs/common';

import { AccountResolver } from './graphql/AccountResolver';
import { AccountService } from './services/AccountService';

import { SignatureMessageModule } from '@domains/signatureMessage/SignatureMessageModule';

@Module({
  imports: [SignatureMessageModule],
  providers: [AccountResolver, AccountService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AccountModule {}
