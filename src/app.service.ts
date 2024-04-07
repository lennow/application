import { Injectable, Logger } from '@nestjs/common';
import { UserDataDto } from './types/user-data.dto';
import { UserResponse } from './types/user.interface';

@Injectable()
export class AppService {
  async createUser(userData: UserDataDto): Promise<UserDataDto> {
    Logger.log(`user: ${userData}`, 'AppService:createUser');
    // TODO: persist userData in DB or bucket (create new user model in DB or new bucket file)
    return userData;
  }

  async verifyUser(credentials): Promise<{ id: string }> {
    Logger.log(`user: ${credentials}`, 'AppService:createUser');
    // TODO: verify user (e.g. in Firebase), get userId
    const userId = '';
    return { id: userId };
  }

  async getUserById(userId: string): Promise<UserResponse> {
    Logger.log(`userId: ${userId}`, 'AppService:getUserById');
    // TODO: fetch user from DB or bucket
    return;
  }
}
