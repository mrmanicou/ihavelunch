import { UserType } from "./UserType";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity
} from "typeorm";
import * as bcrypt from "bcryptjs";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  name: string;

  @Column("text", { unique: true })
  emai: string;

  @Column("text")
  password: string;

  @Column()
  role: string;

  @Column({
    type: "enum",
    enum: UserType,
    default: UserType.WEB
  })
  userType: UserType = UserType.WEB;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
