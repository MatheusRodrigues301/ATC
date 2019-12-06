const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserController');
const DriverUserController = require('./controllers/DriverUserController');
const EstimateController = require('./controllers/EstimateController');
const CargoInfosController = require('./controllers/CargoInfosController');
const DashboardController = require('./controllers/DashboardController');
const DashboardDriverController = require('./controllers/DashboardDriverController');
const AccountController = require('./controllers/AccountController');
const VehicleController = require('./controllers/VehicleController');

const routes = express.Router();
const upload = multer(uploadConfig);

//Account
routes.post('/login-user', AccountController.loginUser);
routes.post('/login-driver-user', AccountController.loginDriverUser);

//DashboardUser
routes.get('/dashboard', DashboardController.show);

//DashboardDriver
routes.get('/dashboard-driver', DashboardDriverController.show);

//User
routes.post('/user', UserController.create);

//Driver
routes.post('/driver-user', DriverUserController.create);

//Vehile
routes.post('/vehicle', VehicleController.create);

//CargoInfos
routes.get('/cargo-infos', CargoInfosController.show);
routes.post('/cargo-infos', CargoInfosController.create);

//Estimate
routes.post('/cargo-infos/:cargo_id/estimate', EstimateController.create);
routes.put('/cargo-infos/:cargo_id/estimate', EstimateController.update);

module.exports = routes;