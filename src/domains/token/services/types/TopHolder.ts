import { Prisma } from '@prisma';

export interface TopHolder {
  accountAddress: string;
  balance: Prisma.Decimal;
  percentage: number;
}
