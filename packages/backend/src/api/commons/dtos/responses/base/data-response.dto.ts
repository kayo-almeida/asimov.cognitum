import { ApiProperty } from '@nestjs/swagger';

/**
 * Response Type
 *
 * @interface DataResponse
 * @template T
 */
export class DataResponse<T> {
  @ApiProperty({ description: 'Data response', required: false })
  data: T | T[] | unknown;

  constructor(data?: T | T[]) {
    this.data = data;
  }
}
