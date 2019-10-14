const mongoose = require('mongoose');

const DriverUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    birthDate: Date,
    gender: String,
    password: String,
    phoneNumber: String,
    documentNumberCpf: String,
    documentNumberCNH: String,
    selfie: String,
    vehicle: {
        plateNumber: String,
        model: String,
        carBrand: String,
        year: Number,
        color: String,
        serviceType: String
    }
})

module.exports = mongoose.model('DriverUser', DriverUserSchema);