var mysql = require("mysql");
function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/",function(req,res){
//        res.json({"Message" : "Hello World !"});
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

    router.get("/users/:Id",function(req,res){
        var query = "SELECT * FROM User WHERE Id=?";
        var table = [req.params.Id];
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
    });

    router.delete("/users/:email",function(req,res){
        var query = "DELETE from User WHERE email=?";
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
    });
}

module.exports = REST_ROUTER;
