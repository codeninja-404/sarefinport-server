import { Router } from "express";
import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/education.controller";
import { authenticateToken, requireAdmin } from "../middleware/auth";

const router = Router();

router.get("/", getEducation);
router.post("/", authenticateToken, requireAdmin, createEducation);
router.put("/:id", authenticateToken, requireAdmin, updateEducation);
router.delete("/:id", authenticateToken, requireAdmin, deleteEducation);

export default router;
