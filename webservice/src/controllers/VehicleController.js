//index, show, store, update, destroy
const Vehicle = require('../models/Vehicle');

module.exports = {
    async create(req, res) {
        //Criação de usuário
        const { plateNumber, model, carBrand, year, color, serviceType, ownerUser } = req.body;
        console.log(req.body)
        let vehicle = await Vehicle.findOne({ plateNumber });

        if (!vehicle) {
            vehicle = await Vehicle.create({
                plateNumber,
                model,
                carBrand,
                year,
                color,
                serviceType,
                ownerUser
            })
        }
        
        return res.json(vehicle);
    }
};