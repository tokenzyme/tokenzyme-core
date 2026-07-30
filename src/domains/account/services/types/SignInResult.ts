import { Account } from '@prisma';

export interface SignInResult {
  account: Account;
  token: string;
}
