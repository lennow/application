import { Injectable, Logger } from '@nestjs/common';
import { UserDataDto } from './dto/user-data.dto';

@Injectable()
export class AppService {
  async createUser(userData: UserDataDto): Promise<UserDataDto> {
    Logger.log(`user: ${userData}`, 'AppService:createUser');
    return userData;
  }
}
