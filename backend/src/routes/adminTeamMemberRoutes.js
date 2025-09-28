// src/routes/adminTeamMemberRoutes.js
import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadBuffer } from "../utils/cloudinary.js"; // named export
import {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember,
} from "../controllers/teamMemberController.js";

const router = express.Router();

// GET all
router.get("/", getAllMembers);

/**
 * Create member
 * - accepts either:
 *   1. A direct `imageUrl` in the request body (from frontend after separate upload)
 *   2. Or a file field named "image" (multipart/form-data)
 * - If a file is uploaded, buffer → Cloudinary → sets req.body.image
 */
router.post(
  "/",
  upload.single("image"),
  async (req, res, next) => {
    try {
      if (req.file && req.file.buffer) {
        try {
          const imageUrl = await uploadBuffer(
            req.file.buffer,
            req.file.originalname || `member-${Date.now()}`
          );
          req.body.image = imageUrl;
        } catch (err) {
          console.warn("Image upload skipped or failed:", err.message);
          req.body.image = req.body.image || null;
        }
      }
      next();
    } catch (err) {
      console.error("Error in upload middleware (create):", err);
      res.status(500).json({ error: "File processing error" });
    }
  },
  createMember
);

/**
 * Update member
 * - same behavior as create
 */
router.put(
  "/:id",
  upload.single("image"),
  async (req, res, next) => {
    try {
      if (req.file && req.file.buffer) {
        try {
          const imageUrl = await uploadBuffer(
            req.file.buffer,
            req.file.originalname || `member-${Date.now()}`
          );
          req.body.image = imageUrl;
        } catch (err) {
          console.warn("Image upload skipped or failed:", err.message);
          req.body.image = req.body.image || null;
        }
      }
      next();
    } catch (err) {
      console.error("Error in upload middleware (update):", err);
      res.status(500).json({ error: "File processing error" });
    }
  },
  updateMember
);

// DELETE
router.delete("/:id", deleteMember);

export default router;
