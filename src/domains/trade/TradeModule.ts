import { Module } from '@nestjs/common';

import { TradeResolver } from './graphql/TradeResolver';
import { TradeService } from './services/TradeService';

@Module({
  providers: [TradeResolver, TradeService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TradeModule {}
