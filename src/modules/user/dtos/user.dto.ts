import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length, Max, Min } from 'class-validator';

export class UserDto {
    @ApiProperty()
    @IsString({ message: 'Content must be a string' })
    @Length(2, 100) 
    name: string;

    @ApiProperty()
    @Length(2, 100) 
    last_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString({ message: 'Content must be a string' })
    @Length(2, 100) 
    username: string;

    @ApiProperty()
    @IsEmail({}, { message: 'Invalid email address' })
    @IsNotEmpty()
    @Length(10,255,{message:'Email must be between 10 and 255 characters long '})
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    authentication_id: string;

    @ApiProperty()
    @IsString({ message: 'Each photo URL must be a string' })
    profile_picture: string;
}