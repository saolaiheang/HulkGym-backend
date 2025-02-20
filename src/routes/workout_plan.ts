import { Router } from "express";
import { GetDatWorkoutPlan } from "../controllers/workout_plan.controller";
import protectRoute from "../middleware/auth";
const router = Router();

router.get("/all",protectRoute(), GetDatWorkoutPlan);


export default router;