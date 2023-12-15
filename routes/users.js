var express = require('express');
var router = express.Router();
var {createUser, getUser, updateUser} = require('../controller/user/userController');

/* GET users listing. */
router.post('/createUser', createUser);
router.get('/getUser/:id', getUser);
router.put('/updateUser/:id', updateUser);

module.exports = router;
