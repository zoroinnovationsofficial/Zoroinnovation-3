import express, { Router } from "express";

// Import individual controller functions for messages
import {
  deleteContact,
  getAllMessages,
  updateMessageStatus,
  viewSingleMessage,
} from "../controllers/admin.controller.js";

// Corrected import: now imports the default export from jobs.controller.js
import jobsController from '../controllers/jobs.controller.js';

import { validate } from "../middlewares/validator.middleware.js";
import { contactStatusValidationRules } from "../validators/contact.validator.js";
import { authMiddleware, checkAdminRole } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Apply authentication and admin role check to all admin routes
router.use(authMiddleware, checkAdminRole);

// --- START: Job Management Routes ---

// GET /api/admin/jobs - To get all jobs
router.get('/jobs', jobsController.getAllJobs);

// POST /api/admin/jobs - To create a new job
router.post('/jobs', jobsController.createNewJob);

// PUT /api/admin/jobs/:id - To update an existing job
router.put('/jobs/:id', jobsController.updateJob);

// DELETE /api/admin/jobs/:id - To delete a job
router.delete('/jobs/:id', jobsController.deleteJob);

// --- END: Job Management Routes ---

// --- START: Message Routes ---

// GET all messages
router.get("/messages", getAllMessages);

// GET a single message
router.get("/messages/:id", viewSingleMessage);

// Update message status
router.put(
  "/messages/:id",
  contactStatusValidationRules,
  validate,
  updateMessageStatus,
);

// Delete contact/message
router.delete("/messages/:id", deleteContact);

// --- END: Message Routes ---


export default router;
