//index, show, store, update, destroy
const CargoInfos = require('../models/CargoInfos');

module.exports = {
    //Listagem das cargas por dono da publicação (usuario logado)
    async show(req, res) {
        const { user_id } = req.headers;

        const cargoInfos = await CargoInfos.find({ ownerUser: user_id });

        return res.json(cargoInfos);
    },

    //Criação de carga
    async create(req, res) {
        const { user_id } = req.headers;
        const { cargoType, startDate, extimatedDate, homeAddress, finalAddress, obs } = req.body;

        const cargoInfos = await CargoInfos.create({
            cargoType,
            startDate,
            extimatedDate,
            homeAddress,
            finalAddress,
            obs,
            ownerUser: user_id
        })

        await cargoInfos.populate('User').execPopulate();

        return res.json(cargoInfos);
    }
};