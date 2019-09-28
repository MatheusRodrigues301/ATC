module.exports = application => {
    application.get('/users', function (req, res) {
        application.app.controllers.cadastro.cadastro(application, req, res);
    });

    application.post('/create-user', function (req, res) {
        application.app.controllers.cadastro.cadastrar(application, req, res);
    });
}