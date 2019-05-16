'user strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var user_model = new Schema({

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

var User;
if(mongoose.model.user){
    User = mongoose.model('Users');
}
else {
    User = mongoose.model('Users', user_model);
}

module.exports = User;