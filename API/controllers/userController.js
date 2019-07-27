'user strict'
var mongoose = require('mongoose');
// var User = require('../model/user');
var crypto = require('crypto');
var User = mongoose.model('Users');
// var index = require('../Views/index');

// sign IN
exports.authenticate = function(req, res){
    console.log(' email : ' + req.params.email + '  password : ' + req.params.password );
    let email = req.params.email;
    let password = req.params.password;
    //Generate Password hash based on sha1
    var shasum = crypto.createHash('sha1');
    shasum.update(password);
    var passwordHash = shasum.digest('hex');
    User.findOne({'email':email, 'password':passwordHash}, function(err, user){
    if(err){
       res.send(err);
    }
    if(!user){
        console.log('NO user was found !!');
        res.json(null);
    }
    else {
        console.log('User was found');
          newUser = new User();
          newUser = user;
          console.log(newUser.email + "  " + newUser.password +  " " + newUser._id);
          newUser.password = null;
        res.json(newUser);
        //return;
    }
    //res.end();
});

};

// sign UP
exports.signUP = function(req, res){
    console.log(' here to create new user !!! ')
    User.findOne({email:req.body.email}, function(err, user){
        if(err){
            res.send(err);
        }
        if(!user){
            console.log('NO user was found !!');
            let user = new User();
            user.name=  req.body.name;
            user.email = req.body.email;

            //Generate Password hash based on sha1
            var shasum = crypto.createHash('sha1');
            shasum.update(req.body.password);
            var passwordHash = shasum.digest('hex');
            user.password = passwordHash;
            user.save(function (err){
              if(err){
                  res.json(err);
              }
              else {
                  console.log('User saved ');
                  user.password = undefined;
                  res.json(user);
              }
            });
        }
        else {
            console.log('This user is already saved !!');
            res.json({"result" : 'the user is allready existed'});
            //return;
        }
        //res.end();
    });
    
    };



// get user id

exports.getUser = function(req, res){
  User.findById(req.param.userId, function(err, user){
      if(err){
          //throw err;
          res.send(err);
         // return;
      }
      if(!user){
          console.log('user was not found !');
          res.json(new User());
         // return;
      }
      else {
        console.log('user was found');
        user.password = undefined;
        res.send(user);
        //return;
      }
     // res.end();
   });
};


exports.listUsers = function(req, res){
  return User.find({}, function(err, users){
    if(err){
        res.send(err);
    }
    if(!users){
        console.log('no user found');
        res.send(new User());
    }else{
        console.log('several users found');
        //res.rendre(index, {items: users});
        res.send(users);
    }
  });
};

