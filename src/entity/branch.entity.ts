import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Branch_User } from "./branch-user.entity";
import { PhoneNumber } from "./phone_number.entity";

@Entity()
export class Branch {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "text", nullable: true }) 
  location: string;

  @Column({ type: "text", nullable: true })
  image: string;

  @OneToMany(() => Branch_User, (branch_user) => branch_user.branch)
  branch_users: Branch_User[];

  @OneToMany(() => PhoneNumber, (phone_number) => phone_number.branch) 
  phone_numbers: PhoneNumber[];
}
