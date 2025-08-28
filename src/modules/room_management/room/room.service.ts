import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoomDto, UpdateRoomDto } from 'src/database/dtos/room.dto';
import { RoomEntity } from 'src/database/models/room.entity';
import { UserService } from 'src/modules/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(RoomEntity)
        private readonly roomRepository: Repository<RoomEntity>,
        private readonly userService: UserService

    ) { }


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
    async getAll(): Promise<CreateRoomDto[]> {
        try {
            return await this.roomRepository.find();
        } catch (error) {
            throw error
        }
    }

    async getOne(room_id: string): Promise<CreateRoomDto> {
        try {
            const user = await this.roomRepository.findOne({ where: { room_id } });
            if (!user) {
                throw new NotFoundException(`Room with ID ${room_id} not found`)
            };
            return user;
        } catch (error) {
            throw error
        }
    }

    async update(id: string, payload: UpdateRoomDto) {
        try {
            const room = await this.getOne(id);
            
            await this.userService.getOne(String(payload.player_1));
            await this.userService.getOne(String(payload.player_2));

            Object.assign(room, payload)
            return await this.roomRepository.save(room)
        } catch (error) {
            throw error;
        }
    }

    async delete(id: string) {
        try {
            const user = await this.getOne(id);
            await this.roomRepository.softDelete(id);
            return { deleted: true };

        } catch (error) {
            throw error;
        }
    }
}
