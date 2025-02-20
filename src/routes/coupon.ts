// import { Router } from "express";
import {Router} from "express"
import { PostDataCoupon } from "../controllers/coupon.controller";
// import protectRoute from "../middleware/auth";


const router = Router();

router.post("/add", PostDataCoupon);

// coupon.post("/create",createcoupon);
// coupon.post("/create",createcoupon),

export default router;
