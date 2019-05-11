import { Eatery } from './Eatery';
import {
  ManyToOne,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;

@Entity()
export class OperatingDay extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: [1, 2, 3, 4, 5, 6, 7], default: 2 })
  dayOfWeek: DayOfWeek;

  @Column()
  startsAt: string;

  @Column()
  endsAt: string;

  @Column()
  isEnabled: boolean = true;

  @ManyToOne(_ => Eatery, eatery => eatery.operatingDays)
  eatery: Eatery;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
