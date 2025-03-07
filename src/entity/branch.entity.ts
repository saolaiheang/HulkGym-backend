import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Branch_User } from "./branch-user.entity";
import { Branch_Contact } from "./branch_contact.entity";

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "text", nullable: true }) 
  location: string;

  @Column({ type: "text", nullable: true })
  image: string;

  @OneToMany(() => Branch_User, (branch_user) => branch_user.branch)
  branch_users: Branch_User[];

  @OneToMany(() => Branch_Contact, (branch_contact) => branch_contact.branch)
  phone_numbers: Branch_Contact[];
}
