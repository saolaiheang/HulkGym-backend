import { Router } from "express";
import { PostDataPromotion, GetDataPromotion, GetByIdPromotion, UpdateDataPromotion, deleteDataPromotion } from "../controllers/promotion.controller";
import protectRoute from "../middleware/auth";
import { RoleEnum } from "../common";

const router = Router();

router.post("/add/new", PostDataPromotion);
router.get("/all",GetDataPromotion);
router.get("/:id", GetByIdPromotion);
router.put("/:id", UpdateDataPromotion);
router.delete("/:id", deleteDataPromotion)

export default router;