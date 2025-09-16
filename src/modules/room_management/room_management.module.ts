import { Module } from '@nestjs/common';
import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';
import { RoomEntity } from 'src/database/models/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { HistoryController } from './history/history.controller';
import { HistoryService } from './history/history.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([RoomEntity]),
    UserModule
  ],
  controllers: [RoomController, HistoryController],
  providers: [RoomService, HistoryService]
})
export class RoomManagementModule {}
