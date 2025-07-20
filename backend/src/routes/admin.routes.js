import express from 'express';
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJobAnalytics,
  toggleFeaturedStatus,
  toggleJobStatus,
  updateJob,
} from '../controllers/adminJobController.js';

import {
  addApplicationNote,
  getAllApplications,
  getApplicationById,
  getApplicationsForJob,
  updateApplicationStatus,
} from '../controllers/adminApplicationController.js';

import {
  createCategory,
  updateCategory,
} from '../controllers/adminCategoryController.js';

const router = express.Router();

// Job routes
router.post('/jobs', createJob);
router.put('/jobs/:id', updateJob);
router.delete('/jobs/:id', deleteJob);
router.get('/jobs', getAllJobs);
router.patch('/jobs/:id/toggle-status', toggleJobStatus);
router.patch('/jobs/:id/toggle-featured', toggleFeaturedStatus);
router.get('/jobs/analytics', getJobAnalytics);

// Applications
router.get('/jobs/:id/applications', getApplicationsForJob);
router.get('/applications', getAllApplications);
router.get('/applications/:id', getApplicationById);
router.put('/applications/:id/status', updateApplicationStatus);
router.post('/applications/:id/notes', addApplicationNote);

// Categories
router.post('/job-categories', createCategory);
router.put('/job-categories/:id', updateCategory);

export default router;
