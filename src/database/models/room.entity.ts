
import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne

} from 'typeorm';
import { BaseEntity } from './base.model';
import { UserEntity } from './user.entity';

@Entity({ name: 'rooms' })
export class RoomEntity extends BaseEntity {

  @Column({ type: 'int' })
  secret_number: number;

  @Column({ type: 'varchar', length: '1250', nullable: true, unique: true })
  room_id: string;

  @Column({ type: 'varchar', length: '1250', nullable: true, default: 'N/A' })
  winner_id: string;

  @Column({ type: 'int', nullable: true, default: 10 })
  tries: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  score: number;

  @ManyToOne(() => UserEntity, (user) => user)
  player_1: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user)
  player_2: UserEntity;


  @BeforeInsert()
  public getSecretNumber() {
    do {
      this.secret_number = (Math.floor((Math.random() * 9000) + 1000))
    } while (this.hasRepdigit(this.secret_number))
    return this.secret_number;
  }

  @BeforeInsert()
  public getRoomId() {
    this.room_id = this.makeString();
    return this.room_id;
  }

  public hasRepdigit(N) {
    return (/([0-9]).*?\1/).test(N)
  }

  makeString(): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
