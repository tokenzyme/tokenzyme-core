import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AccountService } from '../services/AccountService';

import { SignInInput } from './inputs/SignInInput';
import { AccountObject } from './objects/AccountObject';
import { SignInResultObject } from './objects/SignInResultObject';

@Resolver(() => AccountObject)
export class AccountResolver {
  public constructor(private readonly accountService: AccountService) {}

  @Mutation(() => SignInResultObject)
  public signIn(@Args('input') input: SignInInput): Promise<SignInResultObject> {
    return this.accountService.signIn(input);
  }
}
