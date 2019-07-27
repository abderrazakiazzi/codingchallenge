'user strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema,

preferedShop_model = new Schema({

    id_user : String,
    id_shop : String,
    date:{
        type:Date,
        default: Date.now()
    }
});

var preferedshops;
if(mongoose.model.preferedShop_model){
    preferedshops = mongoose.model('Preferedshops');
}
else {
    preferedshops = mongoose.model('Preferedshops', preferedShop_model);
}

module.exports = preferedshops;

//module.exports = mongoose.model('preferedshops', preferedShop_model);