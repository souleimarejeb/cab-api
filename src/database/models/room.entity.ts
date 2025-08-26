
import {
  Column,
  Entity,
  ManyToOne,

} from 'typeorm';
import { BaseEntity } from './base.model';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

@Entity({ name: 'rooms' })
export class RoomEntity extends BaseEntity {

  @ApiProperty()
  @Column({ type: 'varchar', length: '250', nullable: true })
  secret_number: string;


  @ApiProperty()
  @Column({ type: 'varchar', length: '1250', nullable: true })
  winner_id: string;

  @ApiProperty()
  @Column({ type: 'int', nullable: true })
  tries: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: '250', nullable: true })
  score: string;

  @ApiProperty()
  @ManyToOne(() => UserEntity, (user) => user)
  p1_id: UserEntity;

  @ApiProperty()
  @ManyToOne(() => UserEntity, (user) => user)
  p2_id: UserEntity;
}
