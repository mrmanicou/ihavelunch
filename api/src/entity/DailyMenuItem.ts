import { DailyMenu } from './DailyMenu';
import { Dish } from './Dish';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  Column,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class DailyMenuItem extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(_ => DailyMenu, menu => menu.items)
  menu: DailyMenu;

  @ManyToOne(_ => Dish)
  dish: Dish;

  @Column()
  price?: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
