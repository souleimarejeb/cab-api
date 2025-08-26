
import {
  Column,
  Entity,

} from 'typeorm';
import { BaseEntity } from './base.model';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {

  @ApiProperty()
  @Column({ type: 'varchar', length: '250',default:'N/A' })
  name: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: '1250', default:'N/A' })
  last_name: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: '1250',  unique:true})
  username: string;
  
  @ApiProperty()
  @Column({ type: 'varchar', length: '250', unique:true})
  email: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: '250' })
  authentication_id: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: '250', nullable: true })
  profile_picture: string;
}
