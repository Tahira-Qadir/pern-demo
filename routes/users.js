var express = require('express');
var router = express.Router();
var {createUser} = require('../controller/user/userController');

/* GET users listing. */
router.post('/createUser', createUser);

module.exports = router;
