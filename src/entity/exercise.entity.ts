import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Workout } from './workout.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255 })
  name: string;
  @Column({ length: 255 })
  sets: string;
  @Column({ length: 255 ,nullable:true})
  lbs:string
  @Column({ length: 255 })
  calories_burned: string;

  @ManyToOne(() => Workout, (workout) => workout.exercises, { onDelete: 'CASCADE' })
  workouts: Workout;
}

