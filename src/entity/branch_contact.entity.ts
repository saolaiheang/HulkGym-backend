import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Branch } from "./branch.entity";

@Entity()
export class Branch_Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Branch, (branch) => branch.phone_numbers) 
  branch: Branch;

  @Column({ type: "varchar", length: 255, nullable: true })
  phone_number: string;
}
