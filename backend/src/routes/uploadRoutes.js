// src/routes/uploadRoutes.js
import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

// ✅ Configure multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// ✅ POST /api/v1/upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image file provided" });
    }

    // ✅ Use Cloudinary upload_stream with buffer
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "Zoroinnovations" },
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return res
            .status(500)
            .json({ message: "Upload failed", error: error.message });
        }

        // ✅ Respond with Cloudinary secure URL
        return res.status(200).json({
          message: "Image uploaded successfully",
          imageUrl: result.secure_url,
        });
      }
    );

    // ✅ Pipe buffer into Cloudinary stream
    uploadStream.end(req.file.buffer);
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
});

export default router;
