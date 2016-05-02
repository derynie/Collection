var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require('../utils/utils.js');

function REST_ROUTER(router, connection, md5, secretKey) {
    var self = this;
    self.handleRoutes(router, connection, md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes = function(router, connection, md5, secretKey) {

    router.post("/animes", function(req, res) {
	utils.getToken(connection, req.body.userId, function(response) {
	    var tokenBody = req.body._token;
	    if (response === tokenBody) {
		nJwt.verify(response,secretKey,function(err,token){
		    if(err){
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    }
		    else {
			var query = "INSERT INTO Anime(Title, Description, IsFinish, NbTotal, MangaId) VALUES (?, ?, ?, ?, ?)";
			var table = [req.body.title,
				     req.body.description,
				     Boolean(req.body.isFinish.toLowerCase()),
				     parseInt(req.body.nbTotal),
				     utils.parseIntAndNull(req.body.mangaId)];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Anime added !"});
			    }
			});
			console.log(query);
		    }
		});
	    }
	    else {
		res.json({"Error" : true, "Message" : "Your Token is invalid."});
	    }
	});
    });
    
    router.get("/animes", function(req, res) {
	var query = "SELECT * FROM Anime";
	var table = ["user_login"];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Animes" : rows});
	    }
	});
	console.log(query);
    });

    router.get("/animes/:id", function(req, res) {
	var query = "SELECT * from Anime WHERE Id = ?";
	var table = [req.params.id];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Anime" : rows});
	    }
	});
	console.log(query);
    });

    router.put("/animes", function(req, res) {
	utils.getToken(connection, req.body.userId, function(response) {
	    var tokenBody = req.body._token;
	    if (response === tokenBody) {
		nJwt.verify(response, secretKey, function(err,token){
		    if(err) {
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    }
		    else {
			var query = "UPDATE Anime SET"
			if (req.body.title) {query = query + " Title = " + utils.toString(req.body.title) + ",";}
			if (req.body.description) {query = query + " Description = " + utils.toString(req.body.description) + ",";}
			if (req.body.isFinish) {query = query + " IsFinish = " + Boolean(req.body.isFinish) + ","};
			if (req.body.nbTotal) {query = query + " NbTotal = " + parseInt(req.body.nbTotal) + ","};
			if (req.body.mangaId) {query = query + " MangaId = " + utils.parseIntAndNull(req.body.mangaId) + ","};
			query = query.substring(0, query.length - 1);
			query = query + " WHERE Id = ?";
			table = [parseInt(req.body.id)];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Updated anime"});
			    }
			});
			console.log(query);
		    }
		});
	    }
	    else {
		res.json({"Error" : true, "Message" : "Your Token is invalid."});
	    }
	});
    });

    router.delete("/animes/:id", function(req, res) {
	utils.getToken(connection, req.body.userId, function(response) {
	    var tokenBody = req.body._token;
	    if (response === tokenBody) {
		nJwt.verify(response, secretKey, function(err,token){
		    if(err) {
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    } else {
			var query = "DELETE from Anime WHERE Id = ?"
			var table = [parseInt(req.params.id)];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Deleted the anime with id " + req.params.id});
			    }
			});
		    }
		});
	    }
	    else {
		res.json({"Error" : true, "Message" : "Your Token is invalid."});
	    }
	});
    });
}

module.exports = REST_ROUTER;
