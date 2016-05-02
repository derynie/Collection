var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require('../utils/utils.js');
var path = require("path");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {
    router.get("/",function(req,res){
	res.sendFile(path.join(__dirname+'../../../DOC/apidoc/index.html'));
    });

    router.post("/users",function(req,res){
	var query = "INSERT INTO User(Name, Email, Password) VALUES (?,?,?)";
	var table = [req.body.name, req.body.email, md5(req.body.password)];
	query = mysql.format(query,table);
	connection.query(query,function(err,rows){
	    if(err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    } else {
		res.json({"Error" : false, "Message" : "User Added !"});
	    }
	});
	console.log(query);
    });
    
    router.get("/users",function(req,res){
        var query = "SELECT * FROM User";
        var table = ["user_login"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
        console.log(query);
    });

    router.get("/users/:id",function(req,res){
        var query = "SELECT * FROM User WHERE Id=?";
        var table = [req.params.id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
        console.log(query);
    });

    router.put("/users",function(req,res){
	utils.getToken(connection, req.body.id, function(response) {
	    var tokenBody = req.body._token;
	    if (response === tokenBody)
	    {
		nJwt.verify(response,secretKey,function(err,token){
		    if(err){
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    }else{
			var query = "UPDATE User SET Password = ? WHERE Id = ?";
			var table = [md5(req.body.password), req.body.id];
			query = mysql.format(query,table);
			connection.query(query,function(err,rows){
			    if(err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    } else {
				res.json({"Error" : false, "Message" : "Updated the password for id "+req.body.id});
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
    
    router.delete("/users/:id",function(req,res){
	utils.getToken(connection, req.params.id, function(response) {
	    var tokenBody = req.body._token;
	    if (response === tokenBody) {
		nJwt.verify(response,secretKey,function(err,token){
		    if(err){
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    }else{
			var query = "DELETE from User WHERE Id = ?";
			var table = [req.params.id];
			query = mysql.format(query,table);
			connection.query(query,function(err,rows){
			    if(err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    } else {
				res.json({"Error" : false, "Message" : "Deleted the user with id "+req.params.id});
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

    router.get("/users/:id/animes", function(req, res) {
	var query = "SELECT A.Title as title, A.Description as description, A.IsFinish as isFinish, A.NbTotal as nbTotal, A.MangaId as mangaId FROM Anime AS A, User AS U, Link_Anime_User AS L WHERE L.UserId = U.Id AND U.Id = ?"
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error exucuting MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Animes_of_user" : rows});
	    }
	});
    });

    router.post('/login', function(req, res) {

	var query = "SELECT * FROM User WHERE email = ? and password = ?"
	var table = [req.body.email, md5(req.body.password)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error exucuting MySQL query"});
	    } else {
		if (rows.length > 0) {
		    console.log(query);
		    var claims = {
			sub: rows[0].Id,
			iss: 'http://localhost:3000'
		    }
		    var User = rows[0];
		    var jwt = nJwt.create(claims,secretKey);
		    var token = jwt.compact();
		    var queryToken = "UPDATE User SET Token = ? WHERE Id = " + rows[0].Id
		    var tableToken = [token];
		    queryToken = mysql.format(queryToken, tableToken);
		    connection.query(queryToken, function(err, rows) {
			if (err) {
			    res.json({"Error": true, "Message" : "Error while created your API token."});
			}
			else {
			    User.Token = token;
			    res.json({"Error" : false, "Message" : "You are connected.", "User" : User});
			}
			console.log(queryToken);
		    });
		}
		else {
		    res.json({"Error" : true, "Message" : "Didn't find your account"});
		}
	    }
	});
    });
}

module.exports = REST_ROUTER;
