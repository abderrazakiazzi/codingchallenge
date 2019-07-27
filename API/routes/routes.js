'user strict';

//var prefredshops = require('../Controllers/preferedShops');

    
module.exports = function(app) {
    var userController = require('../controllers/userController');
    var shopController = require('../controllers/shopController');
    var preferedShopsController = require('../controllers/preferedShopController');

// ---------------- user  ---------------- \\
    
    // api/user/signin
    app.route('/api/user/authenticate/:email&:password')
    .get(userController.authenticate);
    
    // api/user/signUp
    app.route('/api/user/signUP')
    .post(userController.signUP);

    app.route('/api/users')
    .get(userController.listUsers);

// --------------------- shops -------------- \\
    // api/listsops
    app.route('/api/shops').get(shopController.listShops);


    // api/shops
    app.route('/api/shops/create')
    .post(shopController.createShop);
    app.route('/api/shops/updateShop')
    .post(shopController.updateShop);

    // dislike a shop
    // app.route('/api/shops/dislike/:shops').put(shops.)
    
    // like a shop
    app.route('/api/shops/like').post(shopController.likeShop)

    // get shop
    //app.route('/api/shops/:shopsid').get(listshops.getShop);
    //app.route('/api/users').get(connexion.getallusers);



    // ----------- prefered shop  ----------------------\\\\
    //api/preferedShops
    app.route('/api/preferedshops/:userid').get(preferedShopsController.listPreferedShops);

    // dislike preferedshop id (remove from prefered shops)
    app.route('/api/preferedshops/dislike').post(preferedShopsController.dislikePreferedShop);





};