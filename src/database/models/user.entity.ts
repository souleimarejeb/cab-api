
import {
  Column,
  Entity
} from 'typeorm';
import { BaseEntity } from './base.model';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {

  @Column({ type: 'varchar', length: '250',default:'N/A' })
  name: string;

  @Column({ type: 'varchar', length: '1250', default:'N/A' })
  last_name: string;

  @Column({ type: 'varchar', length: '1250',  unique:true})
  username: string;
  
  @Column({ type: 'varchar', length: '250', unique:true})
  email: string;

  @Column({ type: 'varchar', length: '250' })
  authentication_id: string;

  @Column({ type: 'varchar', length: '250', nullable: true })
  profile_picture: string;
}
