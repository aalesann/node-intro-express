const express = require('express')
const app = express()
let hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Configuración de hbs
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'alesan'
    });
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})