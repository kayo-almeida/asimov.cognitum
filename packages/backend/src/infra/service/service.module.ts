import { UserRepository } from '@infra/mongo/repository/user.repository';
import { UserModel, UserSchema } from '@infra/mongo/schemas/user/user.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from '@infra/service/user.service';
import { OpenAIRepository } from '@infra/openai/repository/openai.repository';
import { OpenAIService } from '@infra/service/openai.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  providers: [UserRepository, UserService, OpenAIRepository, OpenAIService],
  exports: [UserService, OpenAIService],
})
export class ServiceModule {}
