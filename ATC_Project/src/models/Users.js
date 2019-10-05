const mongoose = requires('mongoose');

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    birthDate: Date,
    gender: String,
    password: String,
    phoneNumber: String,
    documentNumberCpf: String,
    selfie: String,
    cargoInfos: []
})

module.exports = mongoose.model('Users', UsersSchema);