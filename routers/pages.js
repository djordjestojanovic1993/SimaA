const express = require('express');
const controller = require('../controlers/pages');
const router = express.Router();

router.get('/:page', controller.showPage);
router.get('/:page/:id', controller.showOnePage);

module.exports = router