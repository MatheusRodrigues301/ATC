const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    plateNumber: String,
    model: String,
    carBrand: String,
    year: Number,
    color: String,
    serviceType: String,
    ownerUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DriverUser'
    }
})

module.exports = mongoose.model('Vehicle', VehicleSchema);