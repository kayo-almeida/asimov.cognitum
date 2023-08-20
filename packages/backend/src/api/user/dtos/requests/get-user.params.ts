import { IsNotEmpty, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class GetUserParamRequestDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User id',
    example: 'ae32a12d-147e-4afa-83f1-34935dff57a5',
  })
  userId: string;
}
