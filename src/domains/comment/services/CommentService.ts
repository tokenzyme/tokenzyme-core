import { BadRequestException, Injectable } from '@nestjs/common';

import { AddCommentArgs } from './args/AddCommentArgs';

import { WebSocketService } from '@core/webSocket/services/WebSocketService';
import { Comment, PrismaClient } from '@prisma';

@Injectable()
export class CommentService {
  public constructor(
    private readonly webSocketService: WebSocketService,
    private readonly prisma: PrismaClient,
  ) {}

  public listComments(tokenAddress: string, pageSize: number, lastCommentId?: number | null): Promise<Comment[]> {
    if (pageSize > 50) {
      throw new BadRequestException('page_size_too_high');
    }
    return this.prisma.comment.findMany({
      where: { tokenAddress },
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      take: pageSize,
      ...(lastCommentId ? { cursor: { id: lastCommentId }, skip: 1 } : {}),
    });
  }

  public async addComment(args: AddCommentArgs): Promise<Comment> {
    if (!args.text.trim().length) {
      throw new BadRequestException('invalid_comment');
    }
    const comment = await this.prisma.comment.create({
      data: {
        accountAddress: args.accountAddress,
        tokenAddress: args.tokenAddress.toLowerCase(),
        text: args.text.trim(),
      },
    });
    this.webSocketService.emitComment(comment);
    return comment;
  }
}
