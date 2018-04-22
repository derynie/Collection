var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require('../utils/utils.js');

function REST_ROUTER(router, connection, md5, secretKey) {
    var self = this;
    self.handleRoutes(router, connection, md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes = function(router, connection, md5, secretKey) {
    
    router.get("/animeItems", function(req, res) {
	var query = "SELECT * FROM Anime_Item";
	query = mysql.format(query, null);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Succes", "Anime_Items" : rows});
	    }
	});
    });

    router.get("/animeItems/:id", function(req, res) {
	var query = "SELECT * FROM Anime_Item WHERE Id = ?";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Anime_Item" : rows});
	    }
	});
    });

    router.post("/animeItems", function(req, res) {
	utils.getToken(connection, req.body.userId, function(response) {
	    var tokenBody = req.headers._token;
	    if (response === tokenBody) {
		nJwt.verify(response, secretKey, function(err, token) {
		    if (err) {
			res.json({"Error" : true, "Message" : "Your token is invalid."});
		    }
		    else {
			var query = "INSERT INTO Anime_Item(Title, Number, AnimeId) VALUES (?, ?, ?)";
			var table = [req.body.title,
				     parseInt(req.body.number),
				     parseInt(req.body.animeId)];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Anime Item added !"});
			    }
			});
		    }
		});
	    }
	    else {
		res.json({"Error" : true, "Message" : "Your token is invalid."});
	    }
	});
    });

    router.put("/animeItems", function(req, res) {
	utils.getToken(connection, req.body.userId, function(response) {
	    var tokenBody = req.headers._token;
            if (response === tokenBody) {
		nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
			res.json({"Error" : true, "Message" : "Your token is invalid."});
                    }
                    else {
			var query = "UPDATE Anime_Item SET";
			if (req.body.title) {query = query + " Title = " + utils.toString(req.body.title) + ",";}
			if (req.body.number) {query = query + " Number = " + parseInt(req.body.number) + ",";}
			if (req.body.animeId) {query = query + " AnimeId = " + parseInt(req.body.animeId) + ",";}
			query = query.substring(0, query.length - 1);
			query = query + " WHERE Id = ?";
			var table = [parseInt(req.body.id)];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Anime Item updated."});
			    }
			});
		    }
		});
	    }
	    else {
		res.json({"Error" : true, "Message" : "Your token is invalid."});
	    }
	});
    });

    router.delete("/animeItems/:id", function(req, res) {
	utils.getToken(connection, req.body.userId, function(response) {
	    var tokenBody = req.headers._token;
            if (response === tokenBody) {
		 nJwt.verify(response, secretKey, function(err, token) {
		     if (err) {
                        res.json({"Error" : true, "Message" : "Your token is invalid."});
                     }
		     else {
			 var query = "DELETE from Anime_Item WHERE Id = ?";
			 var table = [parseInt(req.params.id)];
			 query = mysql.format(query, table);
			 connection.query(query, function(err, rows) {
			     if (err) {
				 res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			     }
			     else {
				 res.json({"Error" : false, "Message" : "Deleted anime item with id " + req.params.id});
			     }
			 });
		     }
		 });
	    }
	    else {
		res.json({"Error" : true, "Message" : "Your token is invalid."});
	    }
	});
    });
}

module.exports = REST_ROUTER;
