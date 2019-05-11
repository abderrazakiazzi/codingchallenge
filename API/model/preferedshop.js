'user strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

preferedShop_model = new Schema({

    id_user : String,
    id_shop : String
});


module.exports = mongoose.model('preferedshops', preferedShop_model);