const express = require('express'); // a var express ganha todas as funcionalidades do  express
const cors = require('cors');
const routes = require('./routes');
const app = express(); // a var app contem a aplicacao (criacao da app)

app.use(cors());
app.use(express.json());// antes de fazer qualquer requisicao, informar que estamos a usar json
app.use(routes);

/**
    app.get('/',(request, response) => {
    return response.send('Hello World');
});
 */

app.listen(3333); //acesse a app pelo broswer localhost:3333