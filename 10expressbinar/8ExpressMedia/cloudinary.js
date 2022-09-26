// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dynggbc0a", // TODO: Ganti dengan cloudname-mu
  api_key: "198177362785924", // TODO: Ganti dengan API Key-mu
  api_secret: "OwezIHRl54VVplYEvDiZ4hCXd7w", // TODO: Ganti dengan API Secret-mu
  secure: true,
});

module.exports = cloudinary;
