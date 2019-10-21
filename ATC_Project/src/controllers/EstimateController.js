//index, show, store, update, destroy
const User = require('../models/User');
const DriverUser = require('../models/DriverUser');
const CargoInfos = require('../models/CargoInfos');
const Estimate = require('../models/Estimate');

module.exports = {
    //Criação de orçamento
    async create(req, res) {
        const { user_id } = req.headers;
        const { cargo_id } = req.params;
        const { serviceDescription, price, extimatedTime, userRequest } = req.body;

        const driverUser = await DriverUser.findById(user_id);
        if (!driverUser)
            return res.status(400).json({ error: 'DriverUser not exists.' });

        const user = await User.findById(userRequest);
        if (!user)
            return res.status(400).json({ error: 'User not exists.' });

        const cargoInfos = await CargoInfos.findById(cargo_id);
        if (!cargoInfos)
            return res.status(400).json({ error: 'CargoInfos not exists.' });

        const estimate = await Estimate.create({
            serviceDescription,
            price,
            extimatedTime,
            userRequest,
            driverUser: user_id,
            cargoInfos: cargo_id
        })

        await estimate.populate('DriverUser').populate('User').populate('CargoInfos').execPopulate();

        return res.json(estimate);
    },

    //Aceita orçamento
    async update(req, res) {
        const { estimate_id } = req.params;

        const estimate = await Estimate.findById(estimate_id).populate('DriverUser').populate('User').populate('CargoInfos');
        if (!estimate)
            return res.status(400).json({ error: 'Estimate not exists.' });

        estimate.accepted = true;

        await estimate.save();

        return res.json(estimate);
    }
};