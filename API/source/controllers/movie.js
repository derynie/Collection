var mysql = require("mysql");
var nJwt = require("njwt");
var utils = require("../utils/utils.js")

function REST_ROUTER(router, connection, md5, secretKey) {
    var self = this;
    self.handleRoutes(router, connection, md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes = function(router, connection, md5, secretKey) {
    
    router.get("/movies", function(req, res) {
	var query = "SELECT * FROM Movie";
	query = mysql.format(query, null);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Movies" : rows});
	    }
	});
    });

}

module.exports = REST_ROUTER;
