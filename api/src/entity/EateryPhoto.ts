import { Photo } from './Photo';
import { Eatery } from './Eatery';
import {
  ManyToOne,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class EateryPhoto extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(_ => Eatery, eatery => eatery.photos)
  eatery: Eatery;

  @OneToOne(_ => Photo)
  @JoinColumn()
  photo: Photo;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
