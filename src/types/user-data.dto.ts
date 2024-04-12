import { IsOptional, IsString } from 'class-validator';

export class UserDataDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

export class UserCredentialsDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class UserDataUpdateBodyDto {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}
