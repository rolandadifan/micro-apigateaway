const express = require('express');
const router = express.Router();
const reviewHandler = require('./handler/review');
const verifyToken = require('../middlewares/verifyToken');


/* GET home page. */

// router.get('/', reviewHandler.getAll);
// router.get('/:id', reviewHandler.get);
router.post('/', reviewHandler.create);
router.put('/:id', reviewHandler.update);
router.delete('/:id', reviewHandler.destroy);


module.exports = router;

