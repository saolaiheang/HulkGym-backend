
import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { WorkoutPlan } from "../entity/workout_plan.entity";

export const GetDatWorkoutPlan = async (req: Request, res: Response) => {
    // const workoutPlanRepo = AppDataSource.getRepository(WorkoutPlan);
    try {
        
        return res.status(201).json({message: " hello"});
    } catch (err) {
        res.status(500).json({ message: "Internal server" });
    }
}