const cloudinary = require('../config/cloudinary');

exports.uploadImage = async function uploadImage(base64) {
  const result = await cloudinary.uploader.upload(base64, {
    folder: 'ecommerce/products'
  });
  return result.secure_url;
};
