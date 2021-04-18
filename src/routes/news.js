const newsController = require('../controllers/NewsController');
var express = require('express');
const router = express.Router();

router.get('/', newsController.index);

router.get('/:slug', newsController.index2);

module.exports = router;
