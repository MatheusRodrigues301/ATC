const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@atc-project-urtan.mongodb.net/dbAtc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para fitros)
// req.params = Acessar router params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

const port = 3333;
console.log('Servidor ON na porta --> http://localhost:' + port);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);