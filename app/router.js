// Je require express pour l'utiliser
const express = require('express');
const argonauteController = require('./controllers/api/argonauteController');
// Je lance express
const router = express.Router();
const argonaute = require ('./controllers/api/argonauteController');

router.get('/', argonauteController.getAllArgonautes);

//router.get('/api', )

module.exports = router;