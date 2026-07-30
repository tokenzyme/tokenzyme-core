import { Catch, ExceptionFilter, Logger } from '@nestjs/common';

@Catch()
export class LogErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(LogErrorFilter.name);

  public catch(err: unknown): void {
    this.logger.error(err, 'An error occurred');
    throw err;
  }
}
