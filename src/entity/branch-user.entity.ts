import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Branch } from "./branch.entity";
import { UserInfo } from "./user.entity";

@Entity()
export class Branch_User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Branch, (branch) => branch.branch_users) 
  @JoinColumn({ name: "branchId" })
  branch: Branch;

  @ManyToOne(() => UserInfo, (user) => user.branch_users) 
  @JoinColumn({ name: "userId" })
  user: UserInfo;
}
