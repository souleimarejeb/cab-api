import { Body, Controller, Post, Put, Get, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { RoomService } from './room.service';
import { CreateRoomDto, UpdateRoomDto } from 'src/database/dtos/room.dto';

@ApiTags('ROOM MGMT')
@Controller({ version: '1', path: 'room' })
export class RoomController {

    constructor(private readonly roomService: RoomService) { }

    @Post()
    @ApiBody({ type: CreateRoomDto })
    create(@Body() paylaod: CreateRoomDto) {
        return this.roomService.create(paylaod);
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.roomService.getOne(id);
    }

    @Get()
    getAll() {
        return this.roomService.getAll();
    }

    @Put(':id')
    @ApiBody({ type: UpdateRoomDto })
    update(
        @Body() payload: UpdateRoomDto,
        @Param('id') id: string
    ) {
        return this.roomService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.roomService.delete(id);
    }

}
