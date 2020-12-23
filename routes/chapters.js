const express = require('express');
const router = express.Router();
const chapterHandler = require('./handler/chapters');
const verifyToken = require('../middlewares/verifyToken');


/* GET home page. */

router.get('/', chapterHandler.getAll);
router.get('/:id', chapterHandler.get);
router.post('/', chapterHandler.create);
router.put('/:id', chapterHandler.update);
router.delete('/:id', chapterHandler.destroy);


module.exports = router;

