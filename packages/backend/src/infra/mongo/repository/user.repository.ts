import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from '@infra/mongo/repository/entity.repository';
import { UserDocument, UserModel } from '@infra/mongo/schemas/user/user.schema';

@Injectable()
export class UserRepository extends EntityRepository<UserDocument> {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }
}
