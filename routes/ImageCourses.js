const express = require('express');
const router = express.Router();
const imageHandler = require('./handler/ImageCourses');
const verifyToken = require('../middlewares/verifyToken');


/* GET home page. */

// router.get('/', imageHandler.getAll);
// router.get('/:id', imageHandler.get);
router.post('/', imageHandler.create);
router.put('/:id', imageHandler.update);
router.delete('/:id', imageHandler.destroy);


module.exports = router;

