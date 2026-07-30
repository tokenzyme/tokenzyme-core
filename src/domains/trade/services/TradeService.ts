import { BadRequestException, Injectable } from '@nestjs/common';

import { TradeCandle } from './types/TradeCandle';

import { Prisma, PrismaClient, Trade } from '@prisma';
import { listTradeCandlesQuery } from '@prisma/sql';

@Injectable()
export class TradeService {
  public constructor(private readonly prisma: PrismaClient) {}

  public listTrades(tokenAddress: string, pageSize: number, lastTradeId?: string | null): Promise<Trade[]> {
    if (pageSize > 50) {
      throw new BadRequestException('page_size_too_high');
    }
    return this.prisma.trade.findMany({
      where: { tokenAddress },
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      take: pageSize,
      ...(lastTradeId ? { cursor: { id: lastTradeId }, skip: 1 } : {}),
    });
  }

  public async listTradeCandles(
    tokenAddress: string,
    resolution: string,
    pageSize: number,
    lastCandleTimestamp?: number | null,
  ): Promise<TradeCandle[]> {
    if (pageSize > 1000) {
      throw new BadRequestException('page_size_too_high');
    }
    const interval = (resolution === '1D' ? 1440 : parseInt(resolution, 10)) * 60;
    const toTimestamp = lastCandleTimestamp ?? Math.floor(Date.now() / 1000);

    const results = await this.prisma.$queryRawTyped(
      listTradeCandlesQuery(tokenAddress.toLowerCase(), toTimestamp, interval, pageSize),
    );
    return results
      .map((result) => ({
        time: (result.timestamp?.toNumber() ?? 0) * 1000,
        open: result.open ?? Prisma.Decimal(0),
        high: result.high ?? Prisma.Decimal(0),
        low: result.low ?? Prisma.Decimal(0),
        close: result.close ?? Prisma.Decimal(0),
        volume: result.volume ?? Prisma.Decimal(0),
      }))
      .reverse();
  }
}
