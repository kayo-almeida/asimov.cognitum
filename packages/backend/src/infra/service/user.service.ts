import { IUser } from '@domain/primitives/user/user.interface';
import { UserRepository } from '@infra/mongo/repository/user.repository';
import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async createUser(user: Omit<IUser, '_id'>): Promise<IUser> {
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
