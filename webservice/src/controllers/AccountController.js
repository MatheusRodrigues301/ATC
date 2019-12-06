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
        console.log()
        let user = await DriverUser.find();
        console.log(user)
        if (user) {
            //await user.populate('Vehicle').execPopulate();
            console.log(user)
            return res.json(user);
        } else {
            return res.status(401).json({ error: 'User Driver not exists.' });
        }
    }
};