const courseController = require('../controllers/CourseController');
var express = require('express');
const router = express.Router();

router.post('/select-many', courseController.selectMany);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);
router.delete('/:id', courseController.destroy);
router.delete('/:id/forever', courseController.destroyfrv);

module.exports = router;
