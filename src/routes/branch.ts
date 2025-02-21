import { Router } from "express";
import { getBranch } from "../controllers/branch.controller";
import { getById } from "../controllers/branch.controller";
import { deleteById } from "../controllers/branch.controller";
import { addBranch } from "../controllers/branch.controller";
const router = Router();


router.post("/new", addBranch)
router.get("/all", getBranch)
router.get("/:id", getById)
router.delete("/:id", deleteById)


export default router;