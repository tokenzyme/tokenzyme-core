import { Field, InputType } from '@nestjs/graphql';

import { SignatureMessageType } from '../enums/SignatureMessageType';

@InputType()
export class CreateSignatureMessageInput {
  @Field()
  public accountAddress!: string;

  @Field(() => SignatureMessageType)
  public type!: SignatureMessageType;
}
