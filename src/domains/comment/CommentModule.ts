import { Module } from '@nestjs/common';

import { CommentResolver } from './graphql/CommentResolver';
import { CommentService } from './services/CommentService';

@Module({
  providers: [CommentResolver, CommentService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CommentModule {}
