import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
} from 'typeorm';
import { UserInfo } from './user.entity';
@Entity('coupon')
export class Coupon {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    offer: string;

    @Column({ type: 'timestamp', nullable:true })
    valid_until: Date;

    @Column()
    terms: string;

    @Column({ type: 'boolean', default: true })
    status: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => UserInfo, (user) => user.coupon)
  user: UserInfo[];




}
