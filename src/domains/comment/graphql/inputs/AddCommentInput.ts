import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddCommentInput {
  @Field()
  public tokenAddress!: string;

  @Field()
  public text!: string;
}
