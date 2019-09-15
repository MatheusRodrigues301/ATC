var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Message = require('./api/models/msgModel'),
    bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/msgdb', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/msgRoutes');
routes(app);
app.listen(port);
app.get('/', (req, res) => { res.json('Bem vindo ao webservice da ATC!'); })
console.log('Message RESTful API server started on: http://localhost:' + port);