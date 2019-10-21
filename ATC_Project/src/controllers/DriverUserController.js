//index, show, store, update, destroy
const DriverUser = require('../models/DriverUser');

module.exports = {
    //Criação de motorista
    async create(req, res) {
        const { filename } = req.file
        const { name, email, password, birthDate, gender, password, phoneNumber, documentNumberCpf, documentNumberCNH, vehicle } = req.body;
        const { plateNumber, model, carBrand, year, color, serviceType } = vehicle;

        let driverUser = await User.findOne({ documentNumberCpf });

        if (!driverUser) {
            driverUser = await DriverUser.create({
                name,
                email,
                password,
                birthDate,
                gender,
                password,
                phoneNumber,
                documentNumberCpf,
                documentNumberCNH,
                selfie: filename,
                vehicle: {
                    plateNumber,
                    model,
                    carBrand,
                    year,
                    color,
                    serviceType
                }
            })
        }

        return res.json(driverUser);
    }
};