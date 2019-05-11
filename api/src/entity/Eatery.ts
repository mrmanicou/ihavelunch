import { Parish } from "./Parish";
import { OperatingDay } from "./OperatingDay";
import { User } from "./User";
import { EateryPhoto } from "./EateryPhoto";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn
} from "typeorm";
import { DailyMenu } from "./DailyMenu";
import { Dish } from "./Dish";

@Entity()
export class Eatery extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // General info
  @Column("text")
  name: string;

  @Column("text")
  description: string;

  @Column("text", { nullable: true })
  contactNumber?: string;

  @OneToOne(_ => User)
  @JoinColumn()
  owner: User;

  // Location info
  @Column({ nullable: true })
  lat?: number;

  @Column({ nullable: true })
  lon?: number;

  @Column("text", { nullable: true })
  address?: string;

  @ManyToOne(_ => Parish, parish => parish.eateries)
  parish: Parish;

  // General Availability
  @OneToMany(_ => OperatingDay, operatingDay => operatingDay.eatery)
  operatingDays: OperatingDay[];

  // Menus
  @OneToMany(_ => DailyMenu, menu => menu.eatery)
  menus: DailyMenu[];

  @OneToMany(_ => Dish, menuItem => menuItem.owner)
  dishes: Dish[];

  // Social
  @OneToMany(_ => EateryPhoto, photo => photo.eatery)
  photos: EateryPhoto[];

  @Column({ nullable: true })
  faceBook?: string;
  @Column({ nullable: true })
  instagram?: string;
  @Column({ nullable: true })
  whatsApp?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
