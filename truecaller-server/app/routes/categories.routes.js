const router = require('express-promise-router')();
const controller = require('../controller/categories.controller');

router.get('/', controller.findAllCat);

module.exports = router;
