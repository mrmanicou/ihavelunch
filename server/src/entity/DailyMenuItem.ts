import { DailyMenu } from './DailyMenu';
import { MenuItem } from './MenuItem';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class DailyMenuItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(_ => DailyMenu, menu => menu.items)
  menu: DailyMenu;

  @ManyToOne(_ => MenuItem)
  item: MenuItem;

  @Column()
  price?: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
