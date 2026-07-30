import { Module } from '@nestjs/common';

import { PriceResolver } from './graphql/PriceResolver';
import { PriceService } from './services/PriceService';

@Module({
  providers: [PriceResolver, PriceService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PriceModule {}
