import { Field, ObjectType } from '@nestjs/graphql';

import { AccountObject } from './AccountObject';

@ObjectType('SignInResult')
export class SignInResultObject {
  @Field()
  public account!: AccountObject;

  @Field()
  public token!: string;
}
