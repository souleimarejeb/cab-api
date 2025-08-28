import { ApiProperty, PartialType } from "@nestjs/swagger";
import { UserEntity } from "../models/user.entity";

export class CreateRoomDto {
    @ApiProperty()
    winner_id: string;

    @ApiProperty()
    tries: number;

    @ApiProperty()
    score: number;
}
export class UpdateRoomDto extends PartialType(CreateRoomDto) {

    @ApiProperty()
    player_1: UserEntity;

    @ApiProperty()
    player_2: UserEntity;

}