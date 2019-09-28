/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = () => {
    console.log('Entrou na função de conexão');
    var db = new mongo.Db(
        'db_atc',
        new mongo.Server(
            'localhost', //string contendo o endereço do servidor
            27017, //porta de conexão
            {}
        ),
        {}
    );

    return db;
}

module.exports = () => {
    return connMongoDB;
}