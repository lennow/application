import { Injectable } from '@nestjs/common';
import {
  UserCredentialsDto,
  UserDataDto,
  UserDataUpdateBodyDto,
} from './types/user-data.dto';
import { UserResponse } from './types/user.interface';
import { writeFileSync, readdirSync, readFileSync } from 'fs';
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

  verifyUser(credentials: UserCredentialsDto): { id: string } {
    const getUserFromFile = readdirSync('./data').filter(
      (file) =>
        JSON.parse(readFileSync(`./data/${file}`, 'utf-8')).email ===
          credentials.email &&
        JSON.parse(readFileSync(`./data/${file}`, 'utf-8')).password ===
          credentials.password,
    );
    const userId = JSON.parse(
      readFileSync(`./data/${getUserFromFile}`, 'utf-8'),
    ).id;
    return { id: userId };
  }

  getUserById(userId: string): UserResponse {
    const userDataFromFile = JSON.parse(
      readFileSync(`./data/${userId}.json`, 'utf-8'),
    );
    const userDataResponse = {
      id: userDataFromFile.id,
      email: userDataFromFile.email,
      firstName: userDataFromFile.firstName,
      lastName: userDataFromFile.lastName,
    };
    return userDataResponse;
  }

  updateUserData(
    userId: string,
    userData: UserDataUpdateBodyDto,
  ): { id: string } {
    const userDataFromFile = JSON.parse(
      readFileSync(`./data/${userId}.json`, 'utf-8'),
    );
    const updatedDataJson = JSON.stringify({
      ...userDataFromFile,
      firstName: userData.firstName ?? userDataFromFile.firstName,
      lastName: userData.lastName ?? userDataFromFile.lastName,
    });
    writeFileSync(`./data/${userId}.json`, updatedDataJson);
    return { id: userId };
  }
}
