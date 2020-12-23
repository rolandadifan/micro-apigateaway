const express = require('express');
const router = express.Router();
const webhookHandler = require('./handler/webhook');
const verifyToken = require('../middlewares/verifyToken');


/* GET home page. */
router.post('/', webhookHandler.webhook);

module.exports = router;
