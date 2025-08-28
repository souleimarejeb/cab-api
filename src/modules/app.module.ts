/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'src/database/config/config';
import { UserModule } from './user/user.module';
import { RoomManagementModule } from './room_management/room_management.module';


@Module({
  imports: [
     ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    RoomManagementModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
