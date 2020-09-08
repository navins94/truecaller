const router = require('express-promise-router')();
const controller = require('../controller/related.controller');

router.get('/', controller.findRelated);

module.exports = router;
