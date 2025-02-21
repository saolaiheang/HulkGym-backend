import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('news_announcements')
export class NewsAnnouncements {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column({ type: 'varchar', length: 255, unique: true, nullable: false }) 
    title: string; 

    @Column({ type: 'text', nullable: false }) 
    content: string; 

    @Column({ type: 'varchar', length: 255, nullable: true })
    location?: string; // Added '?' for optional field

    @Column({ type: 'text', nullable: true }) 
    description?: string; // Changed to optional

    @Column({ type: 'text', nullable: true }) 
    message?: string; // Changed from 'Message' to 'message' (fix naming convention)

    @Column({ type: 'boolean', default: true }) 
    status: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    published_date: Date;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date; 

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}
