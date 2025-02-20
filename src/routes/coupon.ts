import { Router } from "express";
import protectRoute from "../middleware/auth";
import { RoleEnum } from "../common";
import { deleteDataCoupon, getDataByIdCoupon, getDataCoupon, PostDataCoupon, updateDataCoupon } from "../controllers/coupon.controller";

const router = Router();

router.post("/add/new", PostDataCoupon);
router.get("/all", getDataCoupon);
router.get("/:id", getDataByIdCoupon);
router.put("/:id", updateDataCoupon);
router.delete("/:id", deleteDataCoupon)

export default router;