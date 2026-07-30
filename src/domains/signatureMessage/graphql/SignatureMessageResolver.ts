import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { SignatureMessageService } from '../services/SignatureMessageService';

import { CreateSignatureMessageInput } from './inputs/CreateSignatureMessageInput';
import { SignatureMessageObject } from './objects/SignatureMessageObject';

@Resolver(() => SignatureMessageObject)
export class SignatureMessageResolver {
  public constructor(private readonly signatureMessageService: SignatureMessageService) {}

  @Mutation(() => SignatureMessageObject)
  public createSignatureMessage(@Args('input') input: CreateSignatureMessageInput): Promise<SignatureMessageObject> {
    return this.signatureMessageService.createSignatureMessage(input.accountAddress, input.type);
  }
}
