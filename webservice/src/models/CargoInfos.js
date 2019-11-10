const mongoose = require('mongoose');

const CargoInfosSchema = new mongoose.Schema({
    cargoType: String,
    startDate: Date,
    extimatedDate: Date,
    homeAddress: String,
    finalAddress: String,
    obs: String,
    ownerUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('CargoInfos', CargoInfosSchema);