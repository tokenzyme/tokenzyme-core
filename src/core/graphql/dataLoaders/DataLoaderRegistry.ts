import DataLoader from 'dataloader';
import keyBy from 'lodash.keyby';

import { PrismaClient, SocialMedia } from '@prisma';

export class DataLoaderRegistry {
  private dataLoaders: Record<string, DataLoader<unknown, unknown>> = {};

  public constructor(private readonly prisma: PrismaClient) {}

  public get commentsCount(): DataLoader<string, number> {
    return this.getDataLoader(
      'commentsCount',
      () =>
        new DataLoader<string, number>(async (tokenAddresses: readonly string[]): Promise<number[]> => {
          const commentsCounts = await this.prisma.comment.groupBy({
            by: ['tokenAddress'],
            where: { tokenAddress: { in: [...tokenAddresses] } },
            _count: true,
          });
          return tokenAddresses.map(
            (tokenAddress) =>
              // eslint-disable-next-line no-underscore-dangle
              commentsCounts.find((commentsCount) => commentsCount.tokenAddress === tokenAddress)?._count ?? 0,
          );
        }),
    );
  }

  public get socialMedia(): DataLoader<string, SocialMedia | null> {
    return this.getDataLoader(
      'socialMedia',
      () =>
        new DataLoader<string, SocialMedia | null>(
          async (tokenAddresses: readonly string[]): Promise<(SocialMedia | null)[]> => {
            const socialMedia = await this.prisma.socialMedia.findMany({
              where: { tokenAddress: { in: [...tokenAddresses] } },
            });
            return tokenAddresses.map(
              (tokenAddress) => socialMedia.find((media) => media.tokenAddress === tokenAddress) ?? null,
            );
          },
        ),
    );
  }

  public get tradesCount(): DataLoader<string, number> {
    return this.getDataLoader(
      'tradesCount',
      () =>
        new DataLoader<string, number>(async (tokenAddresses: readonly string[]): Promise<number[]> => {
          const tradesCounts = await this.prisma.trade.groupBy({
            by: ['tokenAddress'],
            where: { tokenAddress: { in: [...tokenAddresses] } },
            _count: true,
          });
          return tokenAddresses.map(
            (tokenAddress) =>
              // eslint-disable-next-line no-underscore-dangle
              tradesCounts.find((tradesCount) => tradesCount.tokenAddress === tokenAddress)?._count ?? 0,
          );
        }),
    );
  }

  /**
   * Fetches a memoized data loader based on a string key, or invokes fallback to create one.
   */
  private getDataLoader<K, V>(key: string, fallback: () => DataLoader<K, V>): DataLoader<K, V> {
    if (this.dataLoaders[key]) {
      return this.dataLoaders[key] as DataLoader<K, V>;
    }
    const dataLoader = fallback();
    this.dataLoaders[key] = dataLoader;
    return dataLoader;
  }

  private mapIds<T extends { id: string }>(ids: readonly string[], result: T[]): T[] {
    const valueById = keyBy(result, (value) => value.id);
    return ids.map((id) => {
      const value = valueById[id];
      if (!value) {
        throw new Error('Value not found');
      }
      return value;
    });
  }
}
