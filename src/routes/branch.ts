import { Router } from "express";
import { getBranch } from "../controllers/branch.controller";

const router = Router();

router.get("/all", getBranch)

export default router;