const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    birthDate: Date,
    gender: String,
    phoneNumber: String,
    documentNumberCpf: String,
    selfie: String,
    cargoInfos: []
})

module.exports = mongoose.model('User', UserSchema);