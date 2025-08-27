import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { RoomService } from './room.service';
import { CreateRoomDto } from 'src/database/dtos/create-room.dto';

@ApiTags('ROOM MGMT')
@Controller({ version: '1', path: 'room' })
export class RoomController {

    constructor(private readonly roomService: RoomService) { }

    @Post()
    @ApiBody({ type: CreateRoomDto })
    create(@Body() paylaod: CreateRoomDto) {
        return this.roomService.create(paylaod);
    }
}
