var express = require("express");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5');
var app  = express();
var cors = require('cors');

var animeItem = require("./source/controllers/animeItem.js");
var anime = require("./source/controllers/anime.js");
var movie = require("./source/controllers/movie.js");
var userAnimeItem = require("./source/controllers/user_animeItem.js");
var userAnime = require("./source/controllers/user_anime.js");
var user = require("./source/controllers/user.js");

var uuid = require('node-uuid');
var secretKey = uuid.v4();

function REST(){
    var self = this;
    self.connectMysql();
};


REST.prototype.connectMysql = function() {
    var self = this;
    var pool      =    mysql.createPool({
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'quentin',
        password : 'toto1705//',
        database : 'collection',
        debug    :  false
    });

    pool.getConnection(function(err,connection){
        if(err) {
            self.stop(err);
        } else {
            self.configureExpress(connection);
        }
    });
}


REST.prototype.configureExpress = function(connection) {
    var self = this;
    app.use(cors({origin: '*'}));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    var router = express.Router();
    app.use('/api', router);
    var user_router = new user(router,connection,md5, secretKey);
    var anime_router = new anime(router, connection, md5, secretKey);
    var animeItem_router = new animeItem(router, connection, md5, secretKey);
    var movie_router = new movie(router, connection, md5, secretKey);
    var userAnimeItem_router = new userAnimeItem(router, connection, md5, secretKey);
    var userAnime_router = new userAnime(router, connection, md5, secretKey);
    self.startServer();
}

REST.prototype.startServer = function() {
    
    app.listen(3004,function(){
        console.log("All right ! I am alive at Port 3004.");
    });
}

REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL n" + err);
    process.exit(1);
}

new REST();
