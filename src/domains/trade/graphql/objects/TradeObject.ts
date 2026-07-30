import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLDateTime } from 'graphql-scalars';

import { TradeType as TradeTypeEnum } from '../enums/TradeType';

import { GraphQLDecimal } from '@core/graphql/scalars/GraphQLDecimal';
import { Prisma, TradeType } from '@prisma';

@ObjectType('Trade')
export class TradeObject {
  @Field()
  public id!: string;

  @Field()
  public accountAddress!: string;

  @Field(() => TradeTypeEnum)
  public type!: TradeType;

  @Field(() => GraphQLDecimal)
  public tokenAmount!: Prisma.Decimal;

  @Field(() => GraphQLDecimal)
  public ethAmount!: Prisma.Decimal;

  @Field(() => GraphQLDateTime)
  public createdAt!: Date;
}
