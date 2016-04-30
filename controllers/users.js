var mysql = require("mysql");
var uuid = require('node-uuid')
var nJwt = require('njwt');
var secretKey = uuid.v4();

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {
    router.get("/",function(req,res){
//        res.json({"Message" : "Hello World !"});
    });

    router.post("/users",function(req,res){
	var token = req.body._token;
	
	nJwt.verify(token,secretKey,function(err,token){
	    if(err){
		res.json({"Error": true, "Message" : "Your token is invalid"});
	    }else{
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
	    }
	});
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
	var token = req.body._token;
	nJwt.verify(token,secretKey,function(err,token){
            if(err){
                res.json({"Error": true, "Message" : "Your token is invalid"});
            }else{
		var query = "UPDATE User SET password = ? WHERE email = ?";
		var table = [md5(req.body.password), req.body.email];
		query = mysql.format(query,table);
		connection.query(query,function(err,rows){
		    if(err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		    } else {
			res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.email});
		    }
		});
		console.log(query);
	    }
	});
    });

    router.delete("/users/:email",function(req,res){
	var token = req.body._token;
	nJwt.verify(token,secretKey,function(err,token){
            if(err){
                res.json({"Error": true, "Message" : "Your token is invalid"});
            }else{
		var query = "DELETE from User WHERE Email=?";
		var table = [req.params.email];
		query = mysql.format(query,table);
		connection.query(query,function(err,rows){
		    if(err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		    } else {
			res.json({"Error" : false, "Message" : "Deleted the user with email "+req.params.email});
		    }
		});
		console.log(query);
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
		    
		    var jwt = nJwt.create(claims,secretKey);
		    var token = jwt.compact();
		    res.json({"Error" : false, "Message" : "You are connected.", "Token" : token});
		}
		else {
		    res.json({"Error" : true, "Message" : "Didn't find your account"});
		}
	    }
	});
    });
}

module.exports = REST_ROUTER;
