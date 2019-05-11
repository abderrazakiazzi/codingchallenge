'user strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


user_model = new Schema({

    name : {
        type:String,
        required: 'your name is required'
    },
    email:{
       type: String,
       required: 'email is required'
    },

    password:{
        type:String,
        required:' the password is required'

    },

    date:{
        type:Date,
        default: Date.now
    }


});


module.exports = mongoose.model('users', user_model);