import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Workout } from './workout.entity';

@Entity()
export class WorkoutPlan {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255 })
  name: string;
  @OneToMany(() => Workout, (workout) => workout.workoutPlan)
  workouts: Workout[];
}
