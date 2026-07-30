import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('SignatureMessage')
export class SignatureMessageObject {
  @Field()
  public id!: string;

  @Field()
  public message!: string;
}
