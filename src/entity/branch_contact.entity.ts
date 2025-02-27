import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Branch } from "./branch.entity";

@Entity()
export class Branch_Contact {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Branch, (branch) => branch.phone_numbers) 
  branch: Branch;

  @Column({ type: "varchar", length: 255 })
  phone_number: string;
}
