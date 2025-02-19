import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany } from 'typeorm';
import { WorkoutPlan } from './workout_plan.entity';
import { Exercise } from './exercise.entity';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;
  @ManyToOne(() => WorkoutPlan, (workoutPlan) => workoutPlan.workouts)
  workoutPlan: WorkoutPlan;
  @OneToMany(()=> Exercise,(exercise)=>exercise.workouts)
  exercises: Exercise[];

}
