import { Float, Query, Resolver } from '@nestjs/graphql';

import { PriceService } from '../services/PriceService';

@Resolver()
export class PriceResolver {
  public constructor(private readonly priceService: PriceService) {}

  @Query(() => Float)
  public ethPrice(): Promise<number> {
    return this.priceService.getEthPrice();
  }
}
