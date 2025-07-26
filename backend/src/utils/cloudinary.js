import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function generateImageUrl(path) {
  const uploadResult = await cloudinary.uploader.upload(path).catch((error) => {
    throw new Error(error);
  });
  return uploadResult;
}

export default generateImageUrl;
