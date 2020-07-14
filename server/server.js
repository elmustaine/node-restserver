require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// Instalar body parser  npm i body-parser
app.get('/usuario', function(req, res) {
    res.json('getUsuario');
});

app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }
});

app.put('/usuario/:id_p', function(req, res) {
    let id = req.params.id_p;
    res.json({ id });
});

app.delete('/usuario', function(req, res) {
    res.json('deletUsuario');
});

app.listen(3000, () => {
    console.log(`****escuchando puerto ${process.env.PORT}`);
});