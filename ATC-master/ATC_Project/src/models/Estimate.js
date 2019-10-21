const mongoose = require('mongoose');

const EstimateSchema = new mongoose.Schema({
    serviceDescription: String,
    price: String,
    extimatedTime: Date,
    accepted: Boolean,
    userRequest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    driverUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DriverUser'
    },
    cargoInfos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CargoInfos'
    }
})

module.exports = mongoose.model('Estimate', EstimateSchema);