import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger, ConflictException } from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError, TypeORMError } from 'typeorm';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception instanceof QueryFailedError) {
      const mysqlError = exception as any;
      if (mysqlError.code === 'ER_DUP_ENTRY' || mysqlError.code === '23505') {
        exception = new ConflictException('Credentials taken');
      }
    }

    if (exception instanceof TypeORMError) {
      exception = new ConflictException('Database error');
    }


    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      message =
        typeof res === 'string'
          ? res
          : (res as any).message || 'Unexpected error';
    } else if (exception instanceof Error) {
      message = exception.message;
    }


    this.logger.error(
      `${request.method} ${request.url} ${status} error:{ ${message} } `
    );

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: message,
    });
  }
}