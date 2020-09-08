const router = require('express-promise-router')();
const controller = require('../controller/post.controller');

router.get('/', controller.findAllPost);
router.get('/:slug', controller.findOne);

module.exports = router;
