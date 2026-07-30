import { registerEnumType } from '@nestjs/graphql';

export enum SignatureMessageType {
  SIGN_IN = 'SIGN_IN',
}

registerEnumType(SignatureMessageType, { name: 'SignatureMessageType' });
