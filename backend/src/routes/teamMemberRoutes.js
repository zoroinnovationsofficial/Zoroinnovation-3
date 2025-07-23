import express from 'express';
import {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember
} from '../controllers/teamMemberController.js';
const router = express.Router();

router.get('/', getAllMembers);
router.post('/', createMember);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

export default router;
