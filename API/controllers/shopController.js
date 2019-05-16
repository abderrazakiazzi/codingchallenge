var mongoose = require('mongoose');
var Shops = mongoose.model('shops');
var PreferedShops = mongoose.model('preferedshops');

// get all shops
exports.listShops = function(req, res){
    return Shops.find({}, (err, shops)=>{
        if(err){
            console.log('No element found !!');
            res.send(err);
            //return;
        }
        if(!shops){
            console.log('no element founf');
            res.json(new Shops());
            //return;
        }
        else {
            console.log('shops were found');
            res.json(shops);
           // return;
        }
           //res.end();
    });
};

exports.createShop = function(req, res){
    console.log('shop param ' + req.body.name + ' ' + req.body.distance)
    Shops.findOne({name:req.body.name}, function(err, shop){
   if(err){
       res.json({'result': 'the shop is already existed' });
   }
   if(!shop){
       let shop = new Shops();
       shop.name= req.body.name;
       shop.imageURL = '';
       shop.distance = req.body.distance;
       shop.save(function(err){
           if(err){
               res.json({'result':'shop was not saved '});
           } else {
               res.json(shop);
        }
       });
   }
   else {
    console.log('This shop is already saved !!');
    res.json({"result" : 'Shop is allready existed'});
    //return;
}
    });
};



exports.updateShop = function(req, res){
   Shops.findOne({name:req.body.name}, function(err, shop){
     if(err){
         res.json({'result': 'the shop could not be found'});
     }
     if(shop){
         shop.distance = req.body.distance;
         shop.save(function(err){
             if(err){
                 res.json({'result':'the shop could not be saved'});
             }else{
                 res.json(shop);
             }
         })
     }else{
         res.json({"result": 'this shop does not exist'});
     }
   });

};


exports.likeShop = function(req, res){
    if(req.params.idshop && req.params.iduser){
    let _shop = new preferedshops();
    _shop.id_shop = req.params.idshop;
    _shop.id_user = req.params.iduser;
    
    _shop.save(function(err){
        if(err){
            res.json({'result': 'failed'});
        }
        else{
            res.json({'result': 'success'});
        }
    })
    } 
};

/*module.exports = {
    listShops,
    createShop
};*/