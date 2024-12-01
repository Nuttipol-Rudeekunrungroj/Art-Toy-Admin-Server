const clodinary = require('cloudinary').v2;
const multer = require("multer");

clodinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  const storage = new multer.memoryStorage();
  
  async function imageUploadUtil(file) {
    const result = await clodinary.uploader.upload(file, {
      resource_type: "auto",
    });
  
    return result;
  }
  
  const upload = multer({ storage });
  
  module.exports = { upload, imageUploadUtil };