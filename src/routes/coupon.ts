import { Router } from "express";
// import protectRoute from "../middleware/auth";
import { getCoupon } from "../controllers/coupon.controller";
import { createCoupon } from "../controllers/coupon.controller";

const coupon = Router();

coupon.get("/all", getCoupon);
coupon.post("/create",createCoupon);
// coupon.post("/create",createcoupon),

export default coupon;
