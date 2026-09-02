import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

class TravellerDto {
  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  phone!: string;
}

class PaymentDto {
  @IsString()
  @IsNotEmpty()
  method!: string;

  @IsString()
  @IsNotEmpty()
  last4!: string;

  @IsInt()
  total!: number;
}

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  destination!: string;

  @IsString()
  @IsNotEmpty()
  country!: string;

  @IsString()
  @IsNotEmpty()
  hotel!: string;

  @IsString()
  @IsNotEmpty()
  checkIn!: string;

  @IsString()
  @IsNotEmpty()
  checkOut!: string;

  @IsInt()
  @Min(1)
  guests!: number;

  @IsInt()
  @Min(1)
  nights!: number;

  @IsInt()
  price!: number;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  itemId?: string;

  @IsOptional()
  @IsString()
  status?: 'Confirmed' | 'Upcoming';

  @ValidateNested()
  @Type(() => TravellerDto)
  traveller!: TravellerDto;

  @ValidateNested()
  @Type(() => PaymentDto)
  payment!: PaymentDto;
}

export class UpdateBookingDto {
  @IsOptional()
  @IsString()
  destination?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  hotel?: string;

  @IsOptional()
  @IsString()
  checkIn?: string;

  @IsOptional()
  @IsString()
  checkOut?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  guests?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  nights?: number;

  @IsOptional()
  @IsInt()
  price?: number;
}