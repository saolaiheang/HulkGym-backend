import { Router } from "express";
// import { GetMembershipPlans } from "../controllers/promotion.controller";
import { GetMembershipPlans } from "../controllers/membership.controller";
import protectRoute from "../middleware/auth";
import { RoleEnum } from "../common";

const router = Router();

router.get("/all",GetMembershipPlans);

export default router;