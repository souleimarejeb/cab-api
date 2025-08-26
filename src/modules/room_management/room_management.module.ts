import { Module } from '@nestjs/common';
import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';
import { RoomEntity } from 'src/database/models/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([RoomEntity])
  ],
  controllers: [RoomController],
  providers: [RoomService]
})
export class RoomManagementModule {}
