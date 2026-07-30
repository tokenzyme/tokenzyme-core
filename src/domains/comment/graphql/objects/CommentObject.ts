import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLDateTime } from 'graphql-scalars';

@ObjectType('Comment')
export class CommentObject {
  @Field()
  public id!: number;

  @Field()
  public accountAddress!: string;

  @Field()
  public text!: string;

  @Field(() => GraphQLDateTime)
  public createdAt!: Date;
}
