import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { UserInfo } from './user.entity'; // Assuming UserInfo entity is in user.entity.ts

@Entity('coupon')
export class Coupon {
    @PrimaryGeneratedColumn('uuid')
    id: string; // UUID as a primary key

    @OneToOne(() => UserInfo, (user) => user.coupons)
    @JoinColumn({ name: 'userId' })
    user: UserInfo; // Relationship with UserInfo entity

    

    @Column("decimal")
    discount: number;
    @Column("decimal")

    
    @Column({ type: 'timestamp' }) 
    expiry_date: Date;

    @Column({ type: 'boolean', default: true }) 
    status: boolean;

    @CreateDateColumn()
    createdAt: Date; 

    @UpdateDateColumn()
    updatedAt: Date; 
}



