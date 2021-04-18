const meController = require('../controllers/Mecontroller');
var express = require('express');
const router = express.Router();

router.get('/edit/:id', meController.editOne);
router.patch('/done/:id', meController.update);
router.get('/trash', meController.trash);
router.get('/', meController.editOption);
router.patch('/restore/:id', meController.restore);

module.exports = router;
