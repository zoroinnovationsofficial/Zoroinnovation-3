import express from 'express';
import { submitMessage } from '../controllers/public.controller.js';

const router = express.Router();

// Message Submission
router.post('/contact', submitMessage);

export default router;
