import { Prisma } from '@prisma';

export interface TradeCandle {
  time: number;
  open: Prisma.Decimal;
  high: Prisma.Decimal;
  low: Prisma.Decimal;
  close: Prisma.Decimal;
  volume: Prisma.Decimal;
}
