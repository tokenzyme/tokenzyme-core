import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLDateTime } from 'graphql-scalars';

import { GraphQLDecimal } from '@core/graphql/scalars/GraphQLDecimal';
import { Prisma } from '@prisma';

@ObjectType('Token')
export class TokenObject {
  @Field()
  public address!: string;

  @Field()
  public creatorAddress!: string;

  @Field()
  public name!: string;

  @Field()
  public symbol!: string;

  @Field()
  public description!: string;

  @Field()
  public logoUrl!: string;

  @Field(() => String, { nullable: true })
  public websiteUrl?: string | null;

  @Field(() => GraphQLDecimal)
  public totalSupply!: Prisma.Decimal;

  @Field(() => GraphQLDecimal)
  public bondingCurveSupply!: Prisma.Decimal;

  @Field(() => GraphQLDecimal)
  public ethReserve!: Prisma.Decimal;

  @Field(() => GraphQLDecimal)
  public reserve!: Prisma.Decimal;

  @Field(() => GraphQLDecimal)
  public price!: Prisma.Decimal;

  @Field(() => GraphQLDecimal)
  public finalPrice!: Prisma.Decimal;

  @Field(() => String, { nullable: true })
  public dexPoolAddress?: string | null;

  @Field(() => GraphQLDateTime, { nullable: true })
  public migratedAt?: Date | null;

  @Field(() => GraphQLDateTime)
  public createdAt!: Date;
}
