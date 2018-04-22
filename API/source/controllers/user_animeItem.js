var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require('../utils/utils.js');

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    router.get("/users/:id/animeItems", function(req, res) {
        var query = "SELECT L.Id as LinkId, A.Title AS AnimeTile, AI.Title AS ItemTitle, AI.Number, A.NbTotal, L.Watch, L.Own FROM Link_Anime_Item as L, Anime_Item as AI, Anime as A WHERE L.AnimeItemId = AI.Id AND AI.AnimeId = A.Id AND L.UserId = ?";
        var table = [parseInt(req.params.id)];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            }
            else {
                res.json({"Error" : false, "Message" : "Success", "AnimeItems" : rows});
            }
        });
    });

    router.get("/users/:id/animeItems/:itemId", function(req, res) {
        var query = "SELECT L.Id as LinkId, A.Title AS AnimeTile, AI.Title AS ItemTitle, AI.Number, A.NbTotal, L.Watch, L.Own FROM Link_Anime_Item as L, Anime_Item as AI, Anime as A WHERE L.AnimeItemId = AI.Id AND AI.AnimeId = A.Id AND L.UserId = ? AND L.Id = ?";
        var table = [parseInt(req.params.id),
                     parseInt(req.params.itemId)];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            }
            else {
                res.json({"Error" : false, "Message" : "Success", "AnimeItem" : rows});
            }
        });
    });

    router.post("/users/:id/animeItems", function(req, res) {
        utils.getToken(connection, req.params.id, function(response) {
            var tokenBody = req.headers._token;
            if (response === tokenBody) {
                nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
                        res.json({"Error" : true, "Message" : "Your token is invalid."});
                    }
                    else {
                        var query = "INSERT INTO Link_Anime_Item (UserId, AnimeItemId, Own, Watch) VALUES (?, ?, ?, ?)";
                        var table = [parseInt(req.params.id),
                                     parseInt(req.body.animeItemId),
                                     Boolean(req.body.own),
                                     Boolean(req.body.watch)];
                        query = mysql.format(query, table);
                        connection.query(query, function(err, rows) {
                            if (err) {
                                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                            }
                            else {
                                res.json({"Error" : false, "Message" : "AnimeItem link to you."});
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

    router.put("/users/:id/animeItems", function(req, res) {
        utils.getToken(connection, req.params.id, function(response) {
            var tokenBody = req.headers._token;
            if (response === tokenBody) {
                nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
                        res.json({"Error" : true, "Message" : "Your token is invalid."});
                    }
                    else {
                        var query = "UPDATE Link_Anime_Item SET";
                        if (req.body.animeItemId) {query = query + " AnimeItemId = " + parseInt(req.body.animeItemId) + ",";}
                        if (req.body.own) {query = query + " Own = " + Boolean(req.body.own) + ",";}
                        if (req.body.watch) {query = query + " Watch = " + Boolean(req.body.watch) + ",";}
                        query = query.substring(0, query.length - 1);
                        query = query + " WHERE Id = ?";
                        var table = [parseInt(req.body.linkId)];
                        query = mysql.format(query, table);
                        connection.query(query, function(err, rows) {
                            if (err) {
                                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                            }
                            else {
                                res.json({"Error" : false, "Message" : "Link AnimeItem is updated."});
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

    router.delete("/users/:id/animeItems/:itemId", function(req, res) {
        utils.getToken(connection, req.params.id, function(response) {
            var tokenBody = req.headers._token;
            if (response === tokenBody) {
                nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
                        res.json({"Error" : true, "Message" : "Your token is invalid."});
                    }
                    else {
                        var query = "DELETE FROM Link_Anime_Item WHERE AnimeItemId = ? AND UserId = ?";
                        var table = [parseInt(req.params.itemId), parseInt(req.params.id)];
                        query = mysql.format(query, table);
                        connection.query(query, function(err, rows) {
                            if (err) {
                                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                            }
                            else {
                                res.json({"Error" : false, "Message" : "Deleted link with AnimeItem with id " + req.params.itemId});
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
