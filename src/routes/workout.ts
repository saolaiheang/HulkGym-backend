import { GetDataWorkout } from "../controllers/workout.controller";
import { Router } from "express";

const router = Router();
router.get("/:workoutPlanId/workouts", GetDataWorkout);
export default router;
