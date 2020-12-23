const express = require('express');
const router = express.Router();
const myCourseHandler = require('./handler/myCourse');
const verifyToken = require('../middlewares/verifyToken');


/* GET home page. */


router.get('/', myCourseHandler.get);
router.post('/', myCourseHandler.create);



module.exports = router;

