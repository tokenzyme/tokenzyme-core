import { Module } from '@nestjs/common';

import { TokenResolver } from './graphql/TokenResolver';
import { TokenService } from './services/TokenService';

@Module({
  providers: [TokenResolver, TokenService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TokenModule {}
