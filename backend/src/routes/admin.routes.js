import express from "express";
import {
  deleteContact,
  getAllMessages,
  updateMessageStatus,
  viewSingleMessage,
  getSettings,
  updateSettings,
} from "../controllers/admin.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { contactStatusValidationRules } from "../validators/contact.validator.js";
import { authMiddleware, checkAdminRole } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Apply authentication and admin role check only to /admin/* paths
router.use('/admin', authMiddleware, checkAdminRole);

// Get all messages
router.get("/admin/messages", getAllMessages);

// Get a single message
router.get("/admin/messages/:id", viewSingleMessage);

// Update message status
router.put(
  "/admin/messages/:id",
  contactStatusValidationRules,
  validate,
  updateMessageStatus,
);

// Delete contact
router.delete("/admin/messages/:id", deleteContact);

// Get settings
router.get("/admin/settings", getSettings);

// Update settings
router.put("/admin/settings", updateSettings);

// Test settings endpoint (for debugging)
router.get("/admin/settings/test", async (req, res) => {
  try {
    const Settings = (await import('../models/settings.model.js')).default;
    const count = await Settings.countDocuments();
    const allSettings = await Settings.find();
    res.json({
      message: 'Settings test endpoint',
      count,
      allSettings,
      databaseConnected: true
    });
  } catch (error) {
    res.status(500).json({
      error: 'Database connection failed',
      message: error.message
    });
  }
});

export default router;
