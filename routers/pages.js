const express = require('express');
const controller = require('../controlers/pages');
const router = express.Router();

router.get('/:page', controller.showPage);

module.exports = router