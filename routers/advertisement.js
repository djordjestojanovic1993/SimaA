const express = require('express');
const controller = require('../controlers/advertisement');
const router = express.Router();
const upload = require("../libs/multerConfig")


router.get('/', controller.getAdvertisements);
router.post('/new', upload.single("image"), controller.addAdvertisements);
router.post("/delete", controller.deleteAdvertisments);
router.post("/change", upload.single("image"), controller.changeAdvertisment);
router.post("/changeWidthoutPicture", controller.changeAdverisementWidthoutPicture);


module.exports = router