var mongoose = require('mongoose');
var Shops = mongoose.model('shops');
var PreferedShops = mongoose.model('Preferedshops');
//var assert = require('assert');

// get all shops
exports.listPreferedShops = function (req, res) {
    console.log('test list shop ');
    const userId = req.params.userid;    
    console.log(req.params +  '  iduser = ' + userId);

    PreferedShops.find({id_user: userId}).exec()
    .then(doc => {

        const ids = doc.map(element => element.id_shop)
        //console.log(ids);
        Shops.find({ _id: {$in: ids} }).exec().then(doc2 => {
            res.status(200).json(doc2);
        }).catch(err => {
            res.status(500).json(err);
        })
       
        
    }).catch(err => {
        res.status(500).json({
            message: 'could not get all prefrred shops',
            reason: err
        });
    });
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
    console.log(req.body._id + ' id to remove ');
   return PreferedShops.findOneAndRemove({id_shop: req.body._id }, function (err, task) {
        if (err){
            console.log('failed to remove one prefered ');
            res.send(err);
        }else if(task!=null){
            console.log(1 + " document(s) deleted");
            res.json({ message: 'shop successfully dislike' });
        }
        else {
            console.log('failed to remove one prefered !!!');
            res.send(task);
        }

    }).exec();
};

/*module.exports = {
    listShops,
    createShop
};*/