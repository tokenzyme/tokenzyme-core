import { Injectable } from '@nestjs/common';

import { SignInArgs } from './args/SignInArgs';
import { SignInResult } from './types/SignInResult';

import { JwtService } from '@core/auth/services/JwtService';
import { SignatureMessageService } from '@domains/signatureMessage/services/SignatureMessageService';
import { PrismaClient } from '@prisma';

@Injectable()
export class AccountService {
  public constructor(
    private readonly signatureMessageService: SignatureMessageService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaClient,
  ) {}

  public async signIn(args: SignInArgs): Promise<SignInResult> {
    const signatureMessage = await this.signatureMessageService.assertValidSignature(
      args.signatureMessageId,
      args.signature,
    );
    const account = await this.prisma.account.upsert({
      where: { address: signatureMessage.accountAddress },
      create: { address: signatureMessage.accountAddress },
      update: {},
    });
    const token = await this.jwtService.sign(account.address);
    return { account, token };
  }
}
