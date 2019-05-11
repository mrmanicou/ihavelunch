import { Eatery } from './Eatery';
import { DailyMenuItem } from './DailyMenuItem';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class DailyMenu extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(_ => Eatery, eatery => eatery.menus)
  eatery: Eatery;

  @OneToMany(_ => DailyMenuItem, menuItem => menuItem.menu)
  items: DailyMenuItem[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
