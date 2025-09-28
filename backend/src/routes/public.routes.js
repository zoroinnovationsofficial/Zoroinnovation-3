import express from "express";
import { submitMessage, getAllContacts, getGoogleFormLink } from "../controllers/public.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { contactValidationRules } from "../validators/contact.validator.js";
import { authMiddleware, checkAdminRole } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Message Submission (public)
router.post("/contacts", contactValidationRules, validate, submitMessage);

// Get all contacts (admin only)
router.get("/contacts", authMiddleware, checkAdminRole, getAllContacts);

// Get Google form link (public)
router.get("/google-form-link", getGoogleFormLink);

export default router;
