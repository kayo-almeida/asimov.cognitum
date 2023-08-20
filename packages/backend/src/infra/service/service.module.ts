import { UserRepository } from '@infra/mongo/repository/user.repository';
import { UserModel, UserSchema } from '@infra/mongo/schemas/user/user.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class ServiceModule {}
