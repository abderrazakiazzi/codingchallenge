var mongoose = require('mongoose');
var Shops = mongoose.model('shops');
var PreferedShops = mongoose.model('preferedshops');

// get all shops
exports.listPreferedShops = function (req, res) {
    return PreferedShops.find({}, (err, shops) => {
        if (err) {
            console.log('No element found !!');
            res.send(err);
            //return;
        }
        if (!shops) {
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
    PreferedShops.remove({ _id: req.params.shopId }, function (err, task) {
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