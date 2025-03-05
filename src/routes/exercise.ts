import { GetDataExercise } from "../controllers/exercise.controller";
import { Router } from "express";

const router = Router();
router.get("/:workoutId/exercise", GetDataExercise);
export default router;
