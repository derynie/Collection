var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require('../utils/utils.js');

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    router.get("/users/:id/animes", function(req, res) {
        var query = "SELECT A.Title as title, A.Description as description, A.IsFinish as isFinish, A.NbTotal as nbTotal, A.MangaId as mangaId FROM Anime AS A, User AS U, Link_Anime_User AS L WHERE L.UserId = U.Id AND U.Id = ?";
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
    
    router.get("/users/:id/animes/:animeId", function(req, res) {
	var query = "SELECT A.Title as title, A.Description as description, A.IsFinish as isFinish, A.NbTotal as nbTotal, A.MangaId as mangaId FROM Anime AS A, User AS U, Link_Anime_User AS L WHERE L.UserId = U.Id AND U.Id = ? AND A.Id = ?";
	var table = [parseInt(req.params.id), parseInt(req.params.animeId)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
            if (err) {
		res.json({"Error" : true, "Message" : "Error exucuting MySQL query"});
            }
            else {
		res.json({"Error" : false, "Message" : "Success", "Anime" : rows});
            }
	});
    });

    router.post("/users/:id/animes", function(req, res) {
        utils.getToken(connection, req.params.id, function(response) {
            var tokenBody = req.headers._token;
            if (response === tokenBody) {
                nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
                        res.json({"Error" : true, "Message" : "Your token is invalid."});
                    }
                    else {
                        var query = "INSERT INTO Link_Anime_User (UserId, AnimeId) VALUES (?, ?)";
                        var table = [parseInt(req.params.id), parseInt(req.body.animeId)];
                        query = mysql.format(query, table);
                        connection.query(query, function(err, rows) {
                            if (err) {
                                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                            }
                            else {
                                res.json({"Error" : false, "Message" : "Anime link to you."});
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
    
    router.delete("/users/:id/animes/:animeId", function(req, res) {
        utils.getToken(connection, req.params.id, function(response) {
            var tokenBody = req.headers._token;
            if (response === tokenBody) {
                nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
                        res.json({"Error" : true, "Message" : "Your token is invalid."});
                    }
                    else {
                        var query = "DELETE FROM Link_Anime_User WHERE AnimeId = ? AND UserId = ?"
                        var table = [parseInt(req.params.id),
                                     parseInt(req.params.animeId)];
                        query = mysql.format(query, table);
                        connection.query(query, function(err, rows) {
                            if (err) {
                                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                            }
                            else {
                                res.json({"Error" : false, "Message" : "Deleted the anime with id " + req.params.animeId});
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
