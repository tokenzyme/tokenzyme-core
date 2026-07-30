import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { FastifyRequest } from 'fastify';

import { JwtPayload } from '../types/JwtPayload';

import { Account, PrismaClient } from '@prisma';

type Request = FastifyRequest & { account?: Account };

@Injectable()
export class IsAuthenticated implements CanActivate {
  public constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaClient,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = GqlExecutionContext.create(context).getContext<{ req: Request }>().req;

    const jwt = this.extractTokenFromHeader(request);
    if (!jwt) {
      throw new UnauthorizedException('unauthorized');
    }

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(jwt);
      const account = await this.prisma.account.findUniqueOrThrow({ where: { address: payload.sub } });
      request.account = account;
      return true;
    } catch (err) {
      throw new UnauthorizedException('unauthorized');
    }
  }

  private extractTokenFromHeader(request: FastifyRequest): string | null {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (!type || !token) {
      return null;
    }
    return type === 'Bearer' ? token : null;
  }
}
