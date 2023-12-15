var express = require('express');
var router = express.Router();
var {createUser, getUser, updateUser, deleteUser} = require('../controller/user/userController');

/* GET users listing. */
router.post('/createUser', createUser);
router.get('/getUser/:id', getUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;
