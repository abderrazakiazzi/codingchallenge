const mongoose = require('mongoose');


const preferedShop_model = new mongoose.Schema({
    id_user : String,
    id_shop : String,
    date:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Preferedshops', preferedShop_model);
