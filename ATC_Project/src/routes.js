const express = require('express');
const UserController = require('./controllers/UserController');
const DriverUserController = require('./controllers/DriverUserController');

const routes = express.Router();

routes.post('/sessions-user', UserController.store);
routes.post('/sessions-driver-user', DriverUserController.store);

module.exports = routes;