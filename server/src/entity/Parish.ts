import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Eatery } from './Eatery';

@Entity()
export class Parish {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  name: string;

  @OneToMany(_ => Eatery, eatery => eatery.parish)
  eateries: Eatery[];
}
