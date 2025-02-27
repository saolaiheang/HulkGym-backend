import { Router } from "express";
import protectRoute from "../middleware/auth";
import { RoleEnum } from "../common";
import { CreateNew,GetNewsAnnouncements} from "../controllers/new.controller";

const router = Router();

router.post("/add/new", CreateNew);
router.get("/all", GetNewsAnnouncements);

export default router;