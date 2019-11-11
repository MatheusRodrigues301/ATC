const mongoose = require('mongoose');

const DriverUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    birthDate: Date,
    gender: String,
    phoneNumber: String,
    documentNumberCpf: String,
    documentNumberCNH: String,
    selfie: String,
    vehicles: []
})

module.exports = mongoose.model('DriverUser', DriverUserSchema);