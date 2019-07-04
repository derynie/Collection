var express = require('express');
var cors = require('cors');
var md5 = require('MD5');
var app = express();
var uuid = require('node-uuid');
var secretKey = uuid.v4();

var routes = require('./api/routes');
routes(app);


function REST(){
    var self = this;
    self.configureExpress();
}

REST.prototype.configureExpress = function(connection) {
    var self = this;
    var router = express.Router();
    app.use('/api', router);
    self.startServer();
};

REST.prototype.startServer = function() {
    app.listen(3004,function(){
        console.log("All right ! I am alive at Port 3004.");
    });
};

REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL n" + err);
    process.exit(1);
};

new REST();