const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "..", "public", "pictures", "upload")); // Directory where uploaded files will be stored
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix+ '---' +file.originalname);
      }
})
const upload = multer({ storage: storage });

module.exports = upload;