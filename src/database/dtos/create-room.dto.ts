import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomDto {
    @ApiProperty()
    winner_id: string;

    @ApiProperty()
    tries: number;

    @ApiProperty()
    score: number;
}