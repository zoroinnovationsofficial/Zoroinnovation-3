import express from "express";
import {
  getAllJobs,
  getOpenJobs,
  createJob,
  updateJob,
  deleteJob,
  toggleJobStatus,
} from "../controllers/job.controller.js";
import { authMiddleware, checkAdminRole } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Public routes (no authentication required)
router.get("/jobs/open", getOpenJobs);

// Test route (no authentication required)
router.get("/jobs/test", (req, res) => {
  res.json({ message: "Test route working", timestamp: new Date() });
});

// Simple test route
router.get("/test", (req, res) => {
  res.json({ message: "Simple test route working", timestamp: new Date() });
});

// Admin routes (authentication and admin role required)
// Scope auth middleware ONLY to /admin/* paths so it won't block /auth/login, etc.
router.use('/admin', authMiddleware, checkAdminRole);

router.get("/admin/jobs", getAllJobs);
router.post("/admin/jobs", createJob);
router.put("/admin/jobs/:id", updateJob);
router.delete("/admin/jobs/:id", deleteJob);
router.patch("/admin/jobs/:id/toggle-status", toggleJobStatus);

export default router;
