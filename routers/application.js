const express = require('express');
const controller = require('../controlers/application');
const router = express.Router();
const upload = require("../libs/multerPDF")


router.post('/new', upload.array('pdfFiles', 5), controller.addApplication);


module.exports = router