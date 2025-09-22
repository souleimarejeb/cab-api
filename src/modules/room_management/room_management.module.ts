import { Module } from '@nestjs/common';
import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';
import { RoomEntity } from 'src/database/models/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([RoomEntity]),
    UserModule
  ],
  controllers: [RoomController],
  providers: [RoomService]
})
export class RoomManagementModule {}
