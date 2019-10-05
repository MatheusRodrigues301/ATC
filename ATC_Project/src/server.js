const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@atc-project-urtan.mongodb.net/admin?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para fitros)
// req.params = Acessar router params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3000);