import { HttpException, HttpStatus } from '@nestjs/common';

export class TooManyRequestsException extends HttpException {
  public constructor(message?: string) {
    super(message ?? 'Too Many Requests', HttpStatus.TOO_MANY_REQUESTS);
  }
}
