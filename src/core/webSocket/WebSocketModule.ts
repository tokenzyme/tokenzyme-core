import { Module } from '@nestjs/common';

import { WebSocketService } from './services/WebSocketService';

@Module({
  providers: [WebSocketService],
  exports: [WebSocketService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class WebSocketModule {}
