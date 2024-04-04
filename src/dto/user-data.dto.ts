import { IsString } from 'class-validator';

export class UserDataDto {
  @IsString()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
