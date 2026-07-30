import { randomUUID } from 'crypto';

import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';

import { TokenSortType } from '../enums/TokenSortType';

import { ListTokensArgs } from './args/ListTokensArgs';
import { TopHolder } from './types/TopHolder';

import { StorageClient } from '@cloud/storage/StorageClient';
import { UploadSignedUrl } from '@cloud/storage/types/UploadSignedUrl';
import { Prisma, PrismaClient, Token } from '@prisma';
import { listTopHoldersQuery } from '@prisma/sql';

@Injectable()
export class TokenService {
  private readonly defaultPageSize = 20;

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly storage: StorageClient,
  ) {}

  public getTokenLogoUploadUrl(): Promise<UploadSignedUrl> {
    return this.storage.getUploadSignedUrl(`tokens/${randomUUID()}.webp`, 'image/webp');
  }

  public listTokens(args: ListTokensArgs): Promise<Token[]> {
    let where: Prisma.TokenWhereInput;
    let orderBy: Prisma.TokenOrderByWithRelationInput[];
    switch (args.sortType) {
      case TokenSortType.PROGRESS:
        where = { migratedAt: null };
        orderBy = [{ reserve: 'asc' }, { bondingCurveSupply: 'asc' }];
        break;
      case TokenSortType.PROMOTED:
        where = { migratedAt: { not: null } };
        orderBy = [{ migratedAt: 'desc' }];
        break;
      default:
        where = { migratedAt: null };
        orderBy = [{ createdAt: 'desc' }];
        break;
    }
    return this.prisma.token.findMany({
      where,
      orderBy: [...orderBy, { address: 'desc' }],
      take: args.pageSize ?? this.defaultPageSize,
      ...(args.lastTokenAddress ? { cursor: { address: args.lastTokenAddress }, skip: 1 } : {}),
    });
  }

  public async listFirstPromotedTokensOfMonth(): Promise<Token[]> {
    const liquidities = await this.prisma.dexLiquidity.findMany({
      where: {
        createdAt: {
          gte: DateTime.utc().startOf('month').toJSDate(),
          lte: DateTime.utc().endOf('month').toJSDate(),
        },
      },
      orderBy: [{ createdAt: 'asc' }, { tokenId: 'asc' }],
      take: 3,
      include: { token: true },
    });
    return liquidities.map((liquidity) => liquidity.token);
  }

  public async isTokenRegistered(address: string): Promise<boolean> {
    const count = await this.prisma.token.count({ where: { address: address.toLowerCase() } });
    return count > 0;
  }

  public getToken(address: string): Promise<Token> {
    return this.prisma.token.findUniqueOrThrow({ where: { address: address.toLowerCase() } });
  }

  public async listTopHolders(tokenAddress: string): Promise<TopHolder[]> {
    const token = await this.prisma.token.findUniqueOrThrow({ where: { address: tokenAddress.toLowerCase() } });
    const results = await this.prisma.$queryRawTyped(listTopHoldersQuery(tokenAddress.toLowerCase()));
    return results.map((result) => ({
      accountAddress: result.account_id,
      balance: result.balance ?? Prisma.Decimal(0),
      percentage: result.balance?.div(token.totalSupply).mul(100).toNumber() ?? 0,
    }));
  }
}
