const siteController = require('../controllers/SiteController');
var express = require('express');
const router = express.Router();

router.get('/form', siteController.search);
router.get('/', siteController.index);

module.exports = router;
