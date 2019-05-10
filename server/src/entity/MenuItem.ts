import { Photo } from './Photo';
import { Eatery } from './Eatery';
import {
  Entity,
  BaseEntity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class MenuItem extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  regularPrice: number;

  @ManyToOne(_ => Eatery, eatery => eatery.menuItems)
  owner: Eatery;

  @OneToOne(_ => Photo, { nullable: true })
  @JoinColumn()
  photo?: Photo;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
