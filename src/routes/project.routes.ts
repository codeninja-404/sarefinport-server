import { Router } from "express";
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/project.controller";
import { authenticateToken, requireAdmin } from "../middleware/auth";

const router = Router();

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", authenticateToken, requireAdmin, createProject);
router.put("/:id", authenticateToken, requireAdmin, updateProject);
router.delete("/:id", authenticateToken, requireAdmin, deleteProject);

export default router;
