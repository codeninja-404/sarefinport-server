import { Router } from "express";
import {
  getContactInfo,
  updateContactInfo,
  getContactMessages,
  createContactMessage,
  deleteContactMessage,
} from "../controllers/contact.controller";
import { authenticateToken, requireAdmin } from "../middleware/auth";

const router = Router();

// Public routes
router.get("/info", getContactInfo);
router.post("/message", createContactMessage);

// Admin routes
router.put("/info", authenticateToken, requireAdmin, updateContactInfo);
router.get("/messages", authenticateToken, requireAdmin, getContactMessages);
router.delete(
  "/messages/:id",
  authenticateToken,
  requireAdmin,
  deleteContactMessage
);

export default router;
