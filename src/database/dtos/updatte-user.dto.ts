import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { UserDto } from "./user.dto";

export class UpadteUserDto extends PartialType(UserDto)  {
}