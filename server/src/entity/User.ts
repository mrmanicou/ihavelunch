import { UserType } from './UserType';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text', { unique: true })
  emai: string;

  @Column('text')
  password: string;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.WEB,
  })
  userType: UserType = UserType.WEB;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
