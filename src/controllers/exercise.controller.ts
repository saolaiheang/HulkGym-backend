import { Response,Request } from "express";
import { getRepository } from "typeorm";
import { AppDataSource } from "../config";
import { Exercise } from "../entity/exercise.entity";

export const GetDataExercise =async (req:Request,res:Response)=>{
    
    const exerciseRepository =AppDataSource.getRepository(Exercise);

    const workoutId = req.params.workoutId; 
   try {
    const exercise = await exerciseRepository.find({
        where: { workouts: { id:Number(workoutId) } }, 
        relations: ["workouts"], 
   });
    return res.status(201).json({ message: " hello",exercise });

    
   } catch (error) {
    return res.status(500).json({ message: "error", error });
   }
}

