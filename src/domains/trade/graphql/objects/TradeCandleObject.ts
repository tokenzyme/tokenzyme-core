import { Field, Float, ObjectType } from '@nestjs/graphql';

import { GraphQLDecimal } from '@core/graphql/scalars/GraphQLDecimal';
import { Prisma } from '@prisma';

@ObjectType('TradeCandle')
export class TradeCandleObject {
  @Field(() => Float)
  public time!: number;

  @Field(() => GraphQLDecimal)
  public open!: Prisma.Decimal;

  @Field(() => GraphQLDecimal)
  public high!: Prisma.Decimal;

  @Field(() => GraphQLDecimal)
  public low!: Prisma.Decimal;

  @Field(() => GraphQLDecimal)
  public close!: Prisma.Decimal;

  @Field(() => GraphQLDecimal)
  public volume!: Prisma.Decimal;
}
