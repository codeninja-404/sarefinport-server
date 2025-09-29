import { Router } from "express";
import { getAboutMe, updateAboutMe } from "../controllers/about.controller";
import { authenticateToken, requireAdmin } from "../middleware/auth";

const router = Router();

router.get("/", getAboutMe);
router.put("/", authenticateToken, requireAdmin, updateAboutMe);

export default router;
