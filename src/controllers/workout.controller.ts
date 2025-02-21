import { Response,Request } from "express";
import { getRepository } from "typeorm";
import { Workout} from "../entity/workout.entity";

export const GetDataWorkout =async (req:Request,res:Response)=>{
    const workoutRepository = getRepository(Workout);
   try {
    const workout = await workoutRepository.find();
    return res.status(201).json({ message: " hello", workout });

    
   } catch (error) {
    return res.status(500).json({ message: "error", error });
    
    
   }
    
}