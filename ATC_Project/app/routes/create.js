module.exports = application => {
    application.post('/create-user', function (req, res) {
        application.app.controllers.cadastro.cadastrar(application, req, res);
    });

    application.post('/create-driver-user', function (req, res) {
        application.app.controllers.cadastro.cadastrar(application, req, res);
    });
}