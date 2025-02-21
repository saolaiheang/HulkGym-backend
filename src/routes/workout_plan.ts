import { Router } from "express";

import { GetDatWorkoutPlan,CreateNewPlan,DeleteWorkoutPlan,GetDatWorkoutPlanOne,UpdateWorkoutPlan } from "../controllers/workout_plan.controller";
import protectRoute from "../middleware/auth";
const router = Router();

router.get("/all", GetDatWorkoutPlan);
router.post("/create", CreateNewPlan);
router.delete("/delete/:id", DeleteWorkoutPlan);
router.get("/one/:id", GetDatWorkoutPlanOne);
router.put("/update/:id", UpdateWorkoutPlan);

export default router;