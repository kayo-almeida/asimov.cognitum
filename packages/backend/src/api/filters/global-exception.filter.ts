import { Request, Response } from 'express';

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

import { appSettings } from '@config/app-settings';

@Catch(Error)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const httpsStatus =
      exception instanceof HttpException ? exception.getStatus() : 500;

    const correlationId = request.headers['x-correlation-id'];

    if (httpsStatus >= 500) {
      console.error(exception);
    }

    response.status(httpsStatus).json({
      type: request.url,
      detail: this.getErrorMessage(exception, httpsStatus),
      status: httpsStatus,
      timestamp: new Date().toISOString(),
      path: request.path,
      correlationId,
    });
  }

  private getErrorMessage(
    exception: HttpException | Error,
    status: number,
  ): unknown {
    const exceptionResponse =
      exception instanceof HttpException
        ? (exception.getResponse() as {
            [key: string]: string[] | string | number;
          })
        : exception;

    if (status >= 500 && appSettings.app.env !== 'dev') {
      return {
        message: 'Internal Server Error',
      };
    }

    return {
      message: exception.message,
      type: exception.name,
      validationErrors:
        exceptionResponse.message === exception.message
          ? []
          : exceptionResponse.message,
    };
  }
}
