import { Module } from '@nestjs/common';
import { UserController } from '@api/user/user.controller';
import { ServiceModule } from '@infra/service/service.module';

@Module({
  imports: [ServiceModule],
  controllers: [UserController],
})
export class UserModule {}
