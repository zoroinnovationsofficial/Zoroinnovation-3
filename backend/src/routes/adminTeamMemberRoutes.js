import express from 'express';
import multer from 'multer';
import generateImageUrl from '../utils/cloudinary.js';
import {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember,
} from '../controllers/teamMemberController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getAllMembers);

router.post(
  '/',
  upload.single('image'),
  async (req, res, next) => {
    try {
      const imagePath = req.file?.path;
      let imageUrl = '';

      if (imagePath) {
        imageUrl = await generateImageUrl(imagePath);
      }

      req.body.image = imageUrl;

      next();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  createMember,
);

router.put(
  '/:id',
  upload.single('image'),
  async (req, res, next) => {
    try {
      const imagePath = req.file?.path;
      if (imagePath) {
        const imageUrl = await generateImageUrl(imagePath);
        req.body.image = imageUrl;
      }

      next();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  updateMember,
);

router.delete('/:id', deleteMember);

export default router;
