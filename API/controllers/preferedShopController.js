var mongoose = require('mongoose');
var Shops = mongoose.model('shops');
var PreferedShops = mongoose.model('Preferedshops');
//var assert = require('assert');

// get all shops
exports.listPreferedShops = function (req, res) {
    console.log('test list shop ');
    var array_pShop = [];
    var pShop1 = PreferedShops.find({}).exec();
    console.log(' resultat size = ' + Array.from(pShop1).length);
    Shops.aggregate([{
        $lookup:
        {
            from: PreferedShops,
            localField: '_id',
            foreignField: 'id_shop',
            as : 'preferedShop'
        } 
    }], shoparray =>{
        let _array = shoparray;
        if(!Array.isArray(_array)){
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            return  res.json(_array);
        }
        else {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            return res.json({'result': 'empty list'});
        }
    });

    /*.toArray(function(err, res){
        if(err){
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            res.json({'result ': 'error'});
        }else{
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            res.json(res);
        }
    });
   /* return PreferedShops.find({}, function(err, shop){
        //var array_shop = [];
        if(err){
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            res.json({'result ': 'error '});
        }
        Array.from(shop).forEach(function(err, item){

            console.log(' item ==== ' + shop[item].id_shop);
          Shops.findById(shop[item].id_shop, function(err, listshop){
                if(err){
                    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
                    console.log({'result': 'error :::: no prefered shops found !!'});
                    res.json({'result': 'error '});
                   
                }
                if(!listshop){
                    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
                    res.json({result:'empty list'});
                }else{
                 //array_pShop.push(listshop);
                 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
                 res.json(listshop);
                }
             });

        });
          
    }); */
};

exports.updatePreferedShop = function (req, res) {
    PreferedShops.findOne({ name: req.body.name }, function (err, shop) {
        if (err) {
            res.json({ 'result': 'the shop could not be found' });
        }
        if (shop) {
            shop.distance = req.body.distance;
            shop.save(function (err) {
                if (err) {
                    res.json({ 'result': 'the shop could not be saved' });
                } else {
                    res.json(shop);
                }
            })
        } else {
            res.json({ "result": 'this shop does not exist' });
        }
    });

};


exports.dislikePreferedShop = function (req, res) {
    PreferedShops.deleteOne({ _id: req.params.shopId }, function (err, task) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'shop successfully dislike' });

    }); 
};

/*module.exports = {
    listShops,
    createShop
};*/