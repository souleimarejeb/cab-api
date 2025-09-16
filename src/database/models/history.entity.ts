
import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne

} from 'typeorm';
import { BaseEntity } from './base.model';
import { UserEntity } from './user.entity';

@Entity({ name: 'history' })
export class RoomEntity extends BaseEntity {

  @Column({ type: 'int' })
  order: number;

  @Column({ type: 'varchar', length: '1250', nullable: true, unique: true })
  winner_guess: string;

  @Column({ type: 'varchar', length: '1250', nullable: true, default: 'N/A' })
  player_guess: string;

  @ManyToOne(() => UserEntity, (user) => user)
  player_id: UserEntity;
}
