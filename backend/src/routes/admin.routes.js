import express from 'express';
import {
  deleteContact,
  getAllMessages,
  updateMessageStatus,
  viewSingleMessage,
} from '../controllers/admin.controller.js';

const router = express.Router();

// Get all messages
router.get('/admin/messages', getAllMessages);

// Get a single message
router.get('/admin/messages/:id', viewSingleMessage);

// Update message status
router.put('/admin/messages/:id', updateMessageStatus);

// Delete contact
router.delete('/admin/messages/:id', deleteContact);

export default router;
