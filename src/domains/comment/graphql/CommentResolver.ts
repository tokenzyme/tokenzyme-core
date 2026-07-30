import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CommentService } from '../services/CommentService';

import { AddCommentInput } from './inputs/AddCommentInput';
import { CommentObject } from './objects/CommentObject';

import { CurrentAccount } from '@core/auth/decorators/CurrentAccount';
import { IsAuthenticated } from '@core/auth/guards/IsAuthenticated';
import { Account } from '@prisma/wasm';

@Resolver(() => CommentObject)
export class CommentResolver {
  public constructor(private readonly commentService: CommentService) {}

  @Query(() => [CommentObject])
  public comments(
    @Args('tokenAddress') tokenAddress: string,
    @Args('pageSize', { type: () => Int }) pageSize: number,
    @Args('lastCommentId', { type: () => Int, nullable: true })
    lastCommentId?: number | null,
  ): Promise<CommentObject[]> {
    return this.commentService.listComments(tokenAddress, pageSize, lastCommentId);
  }

  @UseGuards(IsAuthenticated)
  @Mutation(() => CommentObject)
  public addComment(@Args('input') input: AddCommentInput, @CurrentAccount() account: Account): Promise<CommentObject> {
    return this.commentService.addComment({ ...input, accountAddress: account.address });
  }
}
