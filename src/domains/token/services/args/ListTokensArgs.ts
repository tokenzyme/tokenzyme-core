import { TokenSortType } from '@domains/token/enums/TokenSortType';

export interface ListTokensArgs {
  sortType: TokenSortType;
  pageSize?: number | null;
  lastTokenAddress?: string | null;
}
