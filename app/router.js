// Je require express pour l'utiliser
const express = require('express');
// Je lance express
const router = express.Router();
const mainController = require ('./controllers/mainController');

router.get('/', mainController.homePage);


module.exports = router;