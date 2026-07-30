import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

import { Comment } from '@prisma';

// The gateway options are evaluated when this class is defined, before the Nest
// container exists, so CORS_ORIGIN is read straight from the environment here
// rather than through AppConfig. Unset means "allow any origin" — development only.
@WebSocketGateway({
  cors: {
    origin: process.env.CORS_ORIGIN ?? true,
    credentials: true,
  },
})
export class WebSocketService {
  @WebSocketServer()
  private readonly server!: Server;

  public emitComment(comment: Comment): void {
    this.server.emit(`tokens:${comment.tokenAddress}:comments`, comment);
  }
}
