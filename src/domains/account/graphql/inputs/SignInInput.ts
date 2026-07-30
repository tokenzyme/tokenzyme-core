import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignInInput {
  @Field()
  public signatureMessageId!: string;

  @Field()
  public signature!: string;
}
