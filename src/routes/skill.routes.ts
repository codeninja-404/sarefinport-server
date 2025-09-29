import { Router } from "express";
import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skill.controller";
import { authenticateToken, requireAdmin } from "../middleware/auth";

const router = Router();

router.get("/", getSkills);
router.post("/", authenticateToken, requireAdmin, createSkill);
router.put("/:id", authenticateToken, requireAdmin, updateSkill);
router.delete("/:id", authenticateToken, requireAdmin, deleteSkill);

export default router;
