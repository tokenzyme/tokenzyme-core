import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Account')
export class AccountObject {
  @Field()
  public address!: string;
}
