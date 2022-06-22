// Je require express pour l'utiliser
const express = require('express');
const argonauteController = require('./controllers/argonauteController');
// Je lance express
const router = express.Router();


/* argonautes */
router.get('/', argonauteController.getAllArgonautes);
router.post('/argonaute', argonauteController.addArgonaute);

module.exports = router;