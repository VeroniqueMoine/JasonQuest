require('dotenv').config();
// Je require express pour l'utiliser
const express = require('express');
// Je lance express
const app = express();

// je fais le lien avec mon router
const router = require('./app/router');

// Je créer mon port pour afficher ma page sur localhost_, 
const PORT = process.env.PORT || 3000;

// je défini mon moteur de rendus
app.set('view engine', 'ejs');
// Je lui indique ou sont situées les vues
app.set('views', './app/views');

//je défini mon dossier statique
app.use(express.static('integration'));

//express.urlencoded({extended: true});

// je lance mon router
app.use(router);

// je lance mon server et je le teste dans ma console 

app.listen(PORT, () => {
    console.log(`Serveur : http://localhost:${PORT} fonctionnel`)
});
