const express = require('express');
const router = express.Router();
const mentorsHandler = require('./handler/mentors');
const verifyToken = require('../middlewares/verifyToken');


router.get('/', mentorsHandler.getAll);
router.get('/:id', mentorsHandler.get);
router.post('/', mentorsHandler.create);
router.put('/:id', mentorsHandler.update);
router.delete('/:id', mentorsHandler.destroy);

module.exports = router;
