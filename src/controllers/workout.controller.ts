import { Response,Request } from "express";
import { getRepository } from "typeorm";
import { AppDataSource } from "../config";
import { Workout} from "../entity/workout.entity";

export const GetDataWorkout =async (req:Request,res:Response)=>{
    
    const workoutRepository =AppDataSource.getRepository(Workout);

    const workoutPlanId = req.params.workoutPlanId; 
   try {
    const workout = await workoutRepository.find({
        where: { workoutPlan: { id:Number(workoutPlanId) } }, 
        relations: ["workoutPlan"], 
   });
    return res.status(201).json({ message: " hello",workout });

    
   } catch (error) {
    return res.status(500).json({ message: "error", error });
   }
}

