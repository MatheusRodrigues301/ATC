//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { name, email, password, phoneNumber, documentNumberCpf, gender, birthDate, selfie, cargoInfos } = req.body;

        let user = await User.findOne({ documentNumberCpf });

        if (!user) {
            user = await User.create({
                name,
                email,
                password,
                phoneNumber,
                documentNumberCpf,
                gender,
                birthDate,
                selfie,
                cargoInfos
            })
        }

        return res.json(user);
    }
};