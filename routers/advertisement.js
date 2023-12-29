const express = require('express');
const controller = require('../controlers/advertisement');
const router = express.Router();
const upload = require("../libs/multerConfig")


router.get('/', controller.getAdvertisements);
router.post('/new', controller.addAdvertisements);
router.post("/delete", controller.deleteAdvertisments);


module.exports = router