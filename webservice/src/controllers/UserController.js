//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async create(req, res) {
        //Criação de usuário
        const { filename } = req.file
        const { name, email, password, phoneNumber, documentNumberCpf, gender, birthDate, cargoInfos } = req.body;

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
                selfie: filename,
                cargoInfos
            })
        }

        return res.json(user);
    }
};