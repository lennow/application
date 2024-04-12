import { Body, Controller, Get, Logger, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UserCredentialsDto, UserDataDto, UserDataUpdateBodyDto } from './types/user-data.dto';

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

  @Post()
  loginUser(@Body() credentials: UserCredentialsDto) {
    Logger.debug(
      `received event: ${JSON.stringify(credentials)}`,
      'AppController:loginUser',
    );
    return this.appService.verifyUser(credentials);
  }

  @Get('/:id')
  fetchUser(@Param('id') id: string) {
    Logger.debug('AppController:fetchUser');
    return this.appService.getUserById(id);
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() userData: UserDataUpdateBodyDto) {
    Logger.debug('AppController:updateUser');
    return this.appService.updateUserData(id, userData);
  }

  @Put()
  createPasswordResetToken(@Body() userEmail: string) {
    Logger.debug('AppController:createPasswordResetToken');
    return this.appService.createToken(userEmail);
  }

  @Put()
  resetPassword(
    @Body() userData: UserCredentialsDto,
    @Query() passwordResetToken: string,
  ) {
    Logger.debug('AppController:resetPassword');
    return this.appService.updateUserPassword(userData, passwordResetToken);
  }
}
