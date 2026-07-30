import { registerEnumType } from '@nestjs/graphql';

export enum TradeType {
  BUY = 'BUY',
  SELL = 'SELL',
}

registerEnumType(TradeType, { name: 'TradeType' });
