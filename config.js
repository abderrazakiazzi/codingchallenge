var config = {
    VERSION: 1,
    BUILD: 1,
    URL: 'http://localhost',
    API_PATH : '/api',
    PORT : process.env.PORT || 3000,
    DB : {
    //MongoDB configuration
    HOST : 'localhost',
    PORT : '27017',
    DATABASE : 'challengeCoding'
    },
    /*
    * Get DB Connection String for connecting to MongoDB database
    */
    getDBString : function(){
    return 'mongodb://'+ this.DB.HOST +':'+ this.DB.PORT +'/'+ this.DB.DATABASE;
    },
    /*
    * Get the http URL
    */
getHTTPUrl : function(){
    return 'http://' + this.URL + ":" + this.PORT;
    }
}

    module.exports = config;