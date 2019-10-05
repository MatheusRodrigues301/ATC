const mongoose = requires('mongoose');

const CargoInfosSchema = new mongoose.Schema({
    cargoType: String,
    startDate: Date,
    extimatedDate: Date,
    homeAddress: String,
    finalAddress: String,
    obs: String
})

module.exports = mongoose.model('CargoInfos', CargoInfosSchema);