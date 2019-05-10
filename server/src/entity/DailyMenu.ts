import { Eatery } from './Eatery';
import { DailyMenuItem } from './DailyMenuItem';
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class DailyMenu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(_ => Eatery, eatery => eatery.menus)
  eatery: Eatery;

  @OneToMany(_ => DailyMenuItem, menuItem => menuItem.menu)
  items: DailyMenuItem[];
}
