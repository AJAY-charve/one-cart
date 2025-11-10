// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// const uploadOnCloudinary = async (filePath) => {
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });
//   try {
//     if (!filePath) {
//       return null;
//     }
//     const uploadResult = await cloudinary.uploader.upload(filePath);
//     fs.unlinkSync(filePath);
//     return uploadResult.secure_url;
//   } catch (error) {
//     fs.unlinkSync(filePath);
//     console.log(error);
//   }
// };

// export default uploadOnCloudinary;

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(filePath); // local file delete
    return response.secure_url;
  } catch (error) {
    console.log("Cloudinary upload error:", error);
    fs.unlinkSync(filePath);
    return null;
  }
};

export default uploadOnCloudinary;
