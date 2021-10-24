var express = require('express');
var router = express.Router();

let userController = require('../controllers/user.controller');

router.post('/', userController.authenticate)

module.exports = router;