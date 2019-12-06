//index, show, store, update, destroy
const DriverUser = require('../models/DriverUser');

module.exports = {
    //Criação de motorista
    async create(req, res) {
        const { name, email, password, birthDate, gender, phoneNumber, documentNumberCpf, documentNumberCNH } = req.body;
        console.log(req.body)
        let driverUser = await User.findOne({ documentNumberCpf });

        if (!driverUser) {
            driverUser = await DriverUser.create({
                name,
                email,
                password,
                birthDate,
                gender,
                phoneNumber,
                documentNumberCpf,
                documentNumberCNH,
            })
        }

        return res.json(driverUser);
    }
};