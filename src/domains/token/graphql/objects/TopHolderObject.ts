import { Field, Float, ObjectType } from '@nestjs/graphql';

import { GraphQLDecimal } from '@core/graphql/scalars/GraphQLDecimal';
import { Prisma } from '@prisma';

@ObjectType('TopHolder')
export class TopHolderObject {
  @Field()
  public accountAddress!: string;

  @Field(() => GraphQLDecimal)
  public balance!: Prisma.Decimal;

  @Field(() => Float)
  public percentage!: number;
}
