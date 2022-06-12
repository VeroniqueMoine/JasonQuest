// a remplacer si pas de if (process.env....) require('dotenv').config();
const dotenv = require('dotenv');
// Je require express pour l'utiliser
const express = require('express');
// Je lance express
const app = express();

const bodyParser = require("body-parser");

//const http = require('http');


if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

//const app = require('./app');

// je fais le lien avec mon router
const router = require('./app/router');

// Je créer mon port pour afficher ma page sur localhost_, 
const PORT = process.env.PORT || 4000;

//app.use(initLocals);

// je défini mon moteur de rendus
app.set('view engine', 'ejs');
// Je lui indique ou sont situées les vues
app.set('views', './app/views');

//je défini mon dossier statique
app.use(express.static('integration'));

app.use(bodyParser.urlencoded({extended: true}));

//const server = http.createServer(app);

// je lance mon router
app.use(router);



app.listen(PORT, () => {
    console.log(`Serveur : http://localhost:${PORT} fonctionnel`)
});

// // je lance mon server et je le teste dans ma console 
// server.listen(PORT, () => {
//     console.log(`http://localhost:${PORT} fonctionnel`);
// });
