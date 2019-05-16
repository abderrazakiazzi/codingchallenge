'user strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema,

shop_model = new Schema({

    name : {
        type:String,
        required: 'your name is required'
    },
    imageURL : String,
    distance:{
        type:Number,
        default:10
        }

});


module.exports = mongoose.model('shops', shop_model);