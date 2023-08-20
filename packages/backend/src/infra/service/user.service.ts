import { IUser } from '@domain/primitives/user/user.interface';
import { UserRepository } from '@infra/mongo/repository/user.repository';
import { UserModel } from '@infra/mongo/schemas/user/user.schema';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async findUser(_id: string): Promise<UserModel | null> {
    console.debug('findUser(id)', _id);

    const result = await this.repository.findOne({ _id });

    console.debug('findUser result: {result}', { result });

    return result;
  }

  async createUser(user: Omit<IUser, '_id'>): Promise<UserModel> {
    console.debug('createPolicy({user})', { user });

    const result = await this.repository.create({
      ...user,
      _id: uuid(),
    });

    console.debug('createPolicy result: {addResult}', {
      result: result,
    });

    return result;
  }
}
