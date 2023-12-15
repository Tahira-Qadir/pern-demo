var express = require('express');
var router = express.Router();
var {createUser, getUser} = require('../controller/user/userController');

/* GET users listing. */
router.post('/createUser', createUser);
router.get('/getUser/:id', getUser);

module.exports = router;
