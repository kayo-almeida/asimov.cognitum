import { appSettings } from '@config/app-settings';
import { UserService } from '@infra/service/user.service';
import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetUserParamRequestDto } from '@api/user/dtos/requests/get-user.params';
import { CreateUserBodyRequestDto } from '@api/user/dtos/requests/create-user.params';

@Injectable()
@Controller({ version: appSettings.app.version })
export class UserController {
  constructor(private service: UserService) {}

  @Get('/user/:userId')
  @ApiTags('user')
  @ApiOperation({ summary: 'Get a user by id' })
  public async getUser(
    @Param() routeParam: GetUserParamRequestDto,
  ): Promise<unknown> {
    const user = await this.service.findUser(routeParam.userId);

    return user;
  }

  @Post('/user')
  @ApiTags('user')
  @ApiOperation({ summary: 'Create a user' })
  public async createUser(
    @Body() payload: CreateUserBodyRequestDto,
  ): Promise<unknown> {
    const user = await this.service.createUser(payload);

    return user;
  }
}
