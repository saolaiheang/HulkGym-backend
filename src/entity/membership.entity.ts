import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('membership_plan')
export class MembershipPlan {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column({ type: 'varchar', length: 255, unique: true, nullable: false }) 
    plan_name: string; 

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false }) 
    price: number; // Best for storing money values

    @Column({ type: 'text', array: true, nullable: true })
    features: string[]; 

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date;
}
