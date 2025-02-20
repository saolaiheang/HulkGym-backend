import "reflect-metadata";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
@Entity({ name: "promotion" })
export class Promotion {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'varchar', length: 255 })
    promotion_code: string;

    @Column({ type: 'text' })
    description: string;


    @CreateDateColumn()
    start_date: Date;

    @UpdateDateColumn()
    end_date: Date;
}
