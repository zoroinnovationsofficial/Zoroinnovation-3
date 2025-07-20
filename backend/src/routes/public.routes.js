import express from 'express';
import {
  getAllCategories,
  getAllJobs,
  getJobById,
  getJobBySlug,
  getJobsByCategory,
  searchJobs,
  submitApplication,
} from '../controllers/public.controllers.js';
import { validateApplication } from '../validators/applicationValidator.js';

const router = express.Router();

// Jobs
router.get('/jobs', getAllJobs);
router.get('/jobs/:id', getJobById);
router.get('/jobs/slug/:slug', getJobBySlug);
router.get('/jobs/category/:category', getJobsByCategory);
router.get('/jobs/search', searchJobs);

// Apply
router.post('/jobs/:id/apply', validateApplication, submitApplication);

// Categories
router.get('/job-categories', getAllCategories);

export default router;
