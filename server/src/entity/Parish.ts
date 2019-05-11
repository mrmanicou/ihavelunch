import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Eatery } from './Eatery';

@Entity()
export class Parish extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  name: string;

  @OneToMany(_ => Eatery, eatery => eatery.parish)
  eateries: Eatery[];
}
