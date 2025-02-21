
import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { WorkoutPlan } from "../entity/workout_plan.entity";

export const GetDatWorkoutPlan = async (req: Request, res: Response) => {
    const workoutPlanRepo = AppDataSource.getRepository(WorkoutPlan);
    try {
        const workout = await workoutPlanRepo.find();
        console.log(workout)

        return res.status(201).json({ message: " hello", workout });
    } catch (err) {
        res.status(500).json({ message: "Internal server" });
    }
}


export const CreateNewPlan = async (req: Request, res: Response) => {
    const workoutPlanRepo = AppDataSource.getRepository(WorkoutPlan);
    try {
        const { name } = req.body;
        const workout = new WorkoutPlan();
        workout.name = name;
        await workoutPlanRepo.save(workout);
        return res.status(201).json({ message: "workout plan created" });


    } catch (error) {
        res.status(500).json({ message: "Internal server" });

    }

}
export const DeleteWorkoutPlan = async (req: Request, res: Response,) => {
    const workoutPlanRepo = AppDataSource.getRepository(WorkoutPlan);

    try {
        const id = parseInt(req.params.id);
        if (!id) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const workout = await workoutPlanRepo.findOneBy({ id: id });
        if (workout) {
            await workoutPlanRepo.delete(id);
            return res.status(201).json({ message: "workout plan deleted", });
        }
        else {
            return res.status(404).json({ message: "workout plan not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server" });
    }
}

export const GetDatWorkoutPlanOne = async (req: Request, res: Response,) => {
    const workoutPlanRepo = AppDataSource.getRepository(WorkoutPlan);
    try {
        const id = parseInt(req.params.id);
        if (!id) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const workout = await workoutPlanRepo.findOneBy({ id: id });
        if (workout) {
            return res.status(200).json(workout);
        }
        else {
            return res.status(404).json({ message: "workout plan not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server" });
    }


}
export const UpdateWorkoutPlan = async (req: Request, res: Response,) => {
    const workoutPlanRepo = AppDataSource.getRepository(WorkoutPlan);
    try {
        const id = parseInt(req.params.id);
        if (!id) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const workout = await workoutPlanRepo.findOneBy({ id: id });
        if (workout) {
            const workoutUpdate = req.body;
            await workoutPlanRepo.update(id, workoutUpdate);
            return res.status(201).json({ message: "workout plan updated", });
        }
        else {
            return res.status(404).json({ message: "workout plan not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server" });
    }
}