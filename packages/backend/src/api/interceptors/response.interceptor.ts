import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { DataResponse } from '@api/commons/dtos/responses/base/data-response.dto';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, DataResponse<T>>
{
  intercept(
    _: ExecutionContext,
    next: CallHandler,
  ): Observable<DataResponse<T>> {
    return next
      .handle()
      .pipe(map((data) => (this.isDataResponse(data) ? data : { data })));
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private isDataResponse(obj: Object): boolean {
    return (
      typeof obj === 'object' &&
      !Array.isArray(obj) &&
      obj !== null &&
      'data' in obj
    );
  }
}
