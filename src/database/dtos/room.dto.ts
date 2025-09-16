import { ApiProperty, PartialType } from "@nestjs/swagger";
import { UserEntity } from "../models/user.entity";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from 'class-validator';


export class CreateRoomDto {
    
    @ApiProperty()
    @IsString({ message: 'winner_id must be a string' })
    @IsOptional()
    winner_id: string;


    @ApiProperty()
    @IsOptional()
    tries: number;

    @ApiProperty()
    @IsOptional()
    score: number;

    @ApiProperty()
    @IsString({ message: 'player_id must be a string' })
    player_1: UserEntity;

    @ApiProperty()
    @IsString({ message: 'player_id must be a string' })
     player_2: UserEntity;
}
export class UpdateRoomDto extends PartialType(CreateRoomDto) {

    @ApiProperty()
    @IsString({ message: 'Player_id must be a string' })
    @IsOptional()
    player_1: UserEntity;

    @ApiProperty()
    @IsString({ message: 'Player_id must be a string' })
    @IsOptional()
    player_2: UserEntity;

}