const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserController');
const DriverUserController = require('./controllers/DriverUserController');
const EstimateController = require('./controllers/EstimateController');
const CargoInfosController = require('./controllers/CargoInfosController');
const DashboardController = require('./controllers/DashboardController');
const DashboardDriverController = require('./controllers/DashboardDriverController');

const routes = express.Router();
const upload = multer(uploadConfig);

//DashboardUser
routes.get('/dashboard', DashboardController.show);

//DashboardDriver
routes.get('/dashboard-driver', DashboardDriverController.show);

//User
routes.post('/user', upload.single('selfie'), UserController.create);

//Driver
routes.post('/driver-user', upload.single('selfie'), DriverUserController.create);

//CargoInfos
routes.get('/cargo-infos', CargoInfosController.show);
routes.post('/cargo-infos', CargoInfosController.create);

//Estimate
routes.post('/cargo-infos/:cargo_id/estimate', EstimateController.create);
routes.put('/cargo-infos/:cargo_id/estimate', EstimateController.update);

module.exports = routes;