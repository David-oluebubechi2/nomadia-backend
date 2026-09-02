import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
}

export class GoogleLoginDto {
  @IsString()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsString()
  @IsNotEmpty()
  googleId!: string;
}