import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoomDto } from 'src/database/dtos/create-room.dto';
import { RoomEntity } from 'src/database/models/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(RoomEntity)
        private readonly roomRepository: Repository<RoomEntity>) { }


    async create(payload: CreateRoomDto): Promise<CreateRoomDto> {
        try {
           
            const newRoom = this.roomRepository.create({
                ...payload
            })
            return await this.roomRepository.save(newRoom)
        } catch (error) {
            throw error;
        }
    }

}
