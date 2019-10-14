//index, show, store, update, destroy
const DriverUser = require('../models/DriverUser');

module.exports = {
    async store(req, res) {
        const { name, email, password, birthDate, gender, password, phoneNumber, documentNumberCpf, documentNumberCNH, selfie, vehicle } = req.body;
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
                selfie,
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