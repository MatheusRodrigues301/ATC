//index, show, store, update, destroy
const User = require('../models/User');
const DriverUser = require('../models/DriverUser');

module.exports = {
    async loginUser(req, res) {
        //Login usuário
        const { email, password } = req.body;

        let user = await User.findOne({ email, password });

        if (!user) {
            await user.populate('CargoInfos').execPopulate();

            return res.json(user);
        } else {
            return res.status(401).json({ error: 'User not exists.' });
        }
    },

    async loginDriverUser(req, res) {
        //Login usuário motorista
        const { email, password } = req.body;
        console.log(`Email: ${email}, Pass: ${password}`)
        let user = await DriverUser.findOne({email, password});

        if (user) {
            //await user.populate('Vehicle').execPopulate();

            return res.json(user);
        } else {
            return res.status(401).json({ error: 'User Driver not exists.' });
        }
    }
};