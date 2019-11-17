//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async create(req, res) {
        //Criação de usuário
        const {
            name,
            email,
            password,
            phoneNumber,
            documentNumberCpf,
            gender,
            birthDate,
            cargoInfos
        } = req.body;

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
                selfie: "",
                cargoInfos
            })
        }
        console.log('aqui', user)
        return res.json(user);
    }
};