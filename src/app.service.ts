import { Injectable, Logger } from '@nestjs/common';
import { UserDataDto } from './types/user-data.dto';
import { UserResponse } from './types/user.interface';
import { writeFileSync } from 'fs';
import v4 from 'uuid';

@Injectable()
export class AppService {
  /**
   * Note:
   * I chose to persist data as JSON files just to make things less complicated and avoid
   * to running a Cloud Service (e.g. GCP or AWS) for these code examples.
   * As these are just code examples to give you an idea of how I'm coding, I did not include
   * additional security measures except for password hashing.
   *
   * @param userData
   * @returns
   */
  createUser(userData: UserDataDto): { id: string } {
    const userId = v4(); // Note: this can be used to actually write a random uuid for the user
    // const userId = '0dcb8f7f-3563-4f96-abbb-f6be87db351c'; // To allow the test to run properly, I use a hard coded uuid here
    const userJson = JSON.stringify({
      id: userId,
      ...userData,
    });
    writeFileSync(`./data/${userId}.json`, userJson);
    return { id: userId };
  }

  async verifyUser(credentials): { id: string } {
    // TODO: verify user, get userId
    const userId = '';
    return { id: userId };
  }

  async getUserById(userId: string): Promise<UserResponse> {
    Logger.log(`userId: ${userId}`, 'AppService:getUserById');
    // TODO: fetch user from DB or bucket
    return;
  }
}
