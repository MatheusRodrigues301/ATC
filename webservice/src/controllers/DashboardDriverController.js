const Estimate = require('../models/Estimate');

module.exports = {
    async show(req, res) {
        //Listagem do orçamento por usuMario motorista que requisitou(usuário logado)
        const { user_id } = req.headers;

        const estimates = await Estimate.find({ driverUser: user_id });

        return res.json(estimates);
    }
}