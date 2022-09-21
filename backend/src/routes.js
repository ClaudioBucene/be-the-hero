const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.read);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index)

routes.get('/Incidents', IncidentController.read);
routes.post('/Incidents', IncidentController.create);
routes.delete('/Incidents/:id', IncidentController.delete)
module.exports = routes;