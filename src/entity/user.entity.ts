// import "reflect-metadata";
// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   OneToMany,
//   OneToOne,
// } from "typeorm";
// import { RoleEnum } from "../common/types/enum";
// import { Activity } from "./activity.entity";
// import { Branch_User } from "./branch-user.entity";

// @Entity({ name: "user_info" })
// export class UserInfo {
//   @PrimaryGeneratedColumn("uuid")
//   id: string;

//   @Column({ nullable: false })
//   name: string;

//   @Column({ nullable: false })
//   userEmail: string;

//   @Column({ nullable: true })
//   userContact: string;

//   @Column({ nullable: false })
//   password: string;

//   @Column({
//     type: "varchar",
//     length: 255,
//     nullable: true,
//     default: RoleEnum[2],
//   }) // Fix here
//   role: string;

//   @CreateDateColumn()
//   createdAt: Date;

//   @UpdateDateColumn()
//   modifiedAt: Date;

//   @OneToMany(() => Activity, (activity) => activity.user)
//   activities: Activity[]; // One user can have many activities

//   @OneToMany(() => Branch_User, (branch_user) => branch_user.user)
//   branch_users: Branch_User[];
// }

import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { RoleEnum } from "../common/types/enum";
import { Activity } from "./activity.entity";
import { Branch_User } from "./branch-user.entity";
import { Coupon } from "./coupon.entity";

@Entity({ name: "user_info" })
export class UserInfo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  first: string;

  @Column({ nullable: false })
  last: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  phone: number;
  
  @OneToOne(() => Coupon, (coupon) => coupon.user, { nullable: true })
  coupon: Coupon[];

  @Column({
    type: "varchar",
    length: 255,
    nullable: true,
    default: RoleEnum[2],
  })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  modifiedAt: Date;

  @OneToMany(() => Activity, (activity) => activity.user)
  activities: Activity[];

  @OneToMany(() => Branch_User, (branch_user) => branch_user.user)
  branch_users: Branch_User[];
}
