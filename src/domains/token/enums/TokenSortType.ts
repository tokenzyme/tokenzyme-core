import { registerEnumType } from '@nestjs/graphql';

export enum TokenSortType {
  NEW = 'NEW',
  PROGRESS = 'PROGRESS',
  PROMOTED = 'PROMOTED',
}

registerEnumType(TokenSortType, { name: 'TokenSortType' });
