import { randomInt } from 'crypto';

import { BadRequestException, GoneException, Injectable } from '@nestjs/common';
import { isAddress, verifyMessage } from 'ethers';
import { DateTime } from 'luxon';

import { PrismaClient, SignatureMessage, SignatureMessageType } from '@prisma';

@Injectable()
export class SignatureMessageService {
  public constructor(private readonly prisma: PrismaClient) {}

  public createSignatureMessage(accountAddress: string, type: SignatureMessageType): Promise<SignatureMessage> {
    if (!isAddress(accountAddress)) {
      throw new BadRequestException('invalid_account_address');
    }
    const messages: Record<SignatureMessageType, string> = {
      SIGN_IN: `You're signing in as ${accountAddress}.`,
    };
    return this.prisma.signatureMessage.create({
      data: {
        type,
        accountAddress: accountAddress.toLowerCase(),
        message: `${messages[type]} (ID: ${randomInt(100000, 999999).toString()})`,
        expiredAt: DateTime.utc().plus({ minutes: 5 }).toJSDate(),
      },
    });
  }

  public async assertValidSignature(messageId: string, signature: string): Promise<SignatureMessage> {
    const signatureMessage = await this.prisma.signatureMessage.findUniqueOrThrow({ where: { id: messageId } });
    if (new Date() > signatureMessage.expiredAt) {
      throw new GoneException('signature_message_expired');
    }
    const signatureOwner = verifyMessage(signatureMessage.message, signature);
    if (signatureOwner.toLowerCase() !== signatureMessage.accountAddress) {
      throw new BadRequestException('invalid_signature');
    }
    return signatureMessage;
  }
}
