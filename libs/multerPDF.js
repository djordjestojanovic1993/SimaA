const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..","pictures", "upload")); // Putanja do foldera gde će fajlovi biti smešteni
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });


module.exports = upload; // "pdfFiles" is the field name in the form, and 5 is the maximum number of files