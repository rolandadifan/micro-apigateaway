var express = require('express');
var router = express.Router();
const userhandler = require('./handler/users');
const verifyToken = require('../middlewares/verifyToken');
const {APP_NAME} = process.env;

/* GET users listing. */
router.post('/register', userhandler.register);
router.post('/login', userhandler.login);
router.put('/',verifyToken, userhandler.update);
router.get('/', verifyToken, userhandler.getUser);
router.post('/logout', verifyToken, userhandler.logout);

module.exports = router;
