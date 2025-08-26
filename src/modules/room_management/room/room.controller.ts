import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { RoomService } from './room.service';
import { RoomEntity } from 'src/database/models/room.entity';

@ApiTags('ROOM MGMT')
@Controller({ version: '1', path: 'room' })
export class RoomController {

    constructor(private readonly roomService: RoomService) { }

    @Post()
    @ApiBody({ type: RoomEntity })
    create(@Body() paylaod: Partial<RoomEntity>) {
        return this.roomService.create(paylaod);
    }
}
