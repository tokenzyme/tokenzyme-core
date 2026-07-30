import { ExecutionContext, ForbiddenException, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { Account } from '@prisma';

interface Request {
  account?: Account;
}

export const CurrentAccount = createParamDecorator((_, context: ExecutionContext): Account => {
  const request = GqlExecutionContext.create(context).getContext<{ req: Request }>().req;
  if (!request.account) {
    throw new ForbiddenException('account_not_found');
  }
  return request.account;
});
