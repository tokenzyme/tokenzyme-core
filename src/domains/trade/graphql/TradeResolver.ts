import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

import { TradeService } from '../services/TradeService';

import { TradeCandleObject } from './objects/TradeCandleObject';
import { TradeObject } from './objects/TradeObject';

@Resolver(() => TradeObject)
export class TradeResolver {
  public constructor(private readonly tradeService: TradeService) {}

  @Query(() => [TradeObject])
  public trades(
    @Args('tokenAddress') tokenAddress: string,
    @Args('pageSize', { type: () => Int }) pageSize: number,
    @Args('lastTradeId', { type: () => String, nullable: true }) lastTradeId?: string | null,
  ): Promise<TradeObject[]> {
    return this.tradeService.listTrades(tokenAddress, pageSize, lastTradeId);
  }

  @Query(() => [TradeCandleObject])
  public tradeCandles(
    @Args('tokenAddress') tokenAddress: string,
    @Args('resolution') resolution: string,
    @Args('pageSize', { type: () => Int }) pageSize: number,
    @Args('lastCandleTimestamp', { type: () => Float, nullable: true }) lastCandleTimestamp?: number | null,
  ): Promise<TradeCandleObject[]> {
    return this.tradeService.listTradeCandles(tokenAddress, resolution, pageSize, lastCandleTimestamp);
  }
}
