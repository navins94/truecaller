const router = require('express-promise-router')();
const controller = require('../controller/tags.controller');

router.get('/', controller.findAllTags);

module.exports = router;
