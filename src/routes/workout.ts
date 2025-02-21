import { GetDataWorkout } from "../controllers/workout.controller";
import { Router } from "express";

const router = Router();
router.get("/workout", GetDataWorkout);
export default router;
