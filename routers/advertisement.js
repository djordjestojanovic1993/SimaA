const express = require('express');
const controller = require('../controlers/advertisement');
const router = express.Router();
const upload = require("../libs/multerConfig")


router.get('/', controller.getAdvertisements);
router.post('/new', upload.single("image"), controller.addAdvertisements);
router.post("/delete", controller.deleteAdvertisments);
router.post("/change", controller.changeAdvertisment);


module.exports = router