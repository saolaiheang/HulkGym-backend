import "reflect-metadata";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from "typeorm";

@Entity({ name: "promotion" })
export class Promotion {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'varchar' })
    img_url: string;

    @Column({ type: 'text' })
    offer_description: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    discount_percentage: number;

    @Column({ type: 'date' })
    valid_until: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
