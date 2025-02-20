import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Branch } from "./branch.entity";

@Entity()
export class PhoneNumber {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Branch, (branch) => branch.phone_numbers) 
  @JoinColumn({ name: 'branchId' })
  branch: Branch;

  @Column({ type: "varchar", length: 255 })
  phone_number: string;

 
}
