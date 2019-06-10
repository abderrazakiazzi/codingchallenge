'user strict';
// import modules
var express = require('./node_modules/express');
var mongo = require('./node_modules/mongoose');
var bodyParser = require('./node_modules/body-parser');
var CONFIG = require('./config');

// create model loading here
//var User = require('./model/user');// created model loading here
//var shop = require('./model/shop');// created model loading here
//preferedshop = require('./Model/preferedShop'); // created model loading here


var app = express();
// port for server listening
//port = process.env.PORT || 3000;

// connection to mongodb collextions
mongo.Promise = global.Promise;
mongo.connect(CONFIG.getDBString()).catch();

Users = require('./API/model/user');
Shops = require('./API/model/shop');
PreferedShops = require('./API/model/preferedshop');

// config app 



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use((req, res, next) => {    
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization');
        
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, DELETE, POST, GET');
        return res.status(200).json({});
    }
    next();

});

// add les routes
var routes = require('./API/routes/routes');
routes(app);



// listening to the port 
app.listen(CONFIG.PORT);

console.log('Web challenge coding is listening to the port ' + CONFIG.PORT);


// default error page
app.use(function(req, res){
res.status(404).send({url: req.originalUrl + ' : this url not found !!!'} )
});


module.exports = app;