import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDataDto } from './dto/user-data.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  registerNewUser(@Body() userData: UserDataDto) {
    Logger.debug(
      `received event: ${JSON.stringify(userData)}`,
      'AppController:registerNewUser',
    );
    return this.appService.createUser(userData);
  }
}
