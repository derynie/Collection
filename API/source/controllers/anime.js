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
            var tokenBody = req.headers._token;
            if (response === tokenBody) {
                nJwt.verify(response,secretKey,function(err,token){
                    if(err){
                        res.json({"Error": true, "Message" : "Your token is invalid"});
                    }
                    else {
                        //var query = "INSERT INTO Anime(Title, Description, IsFinish, NbTotal, MangaId, Picture) VALUES (?, ?, ?, ?, ?, ?)";
                        var query = "INSERT INTO Anime(Title, IsFinish, NbTotal, MangaId, Picture) VALUES (?, ?, ?, ?, ?)";
                        var table = [req.body.title,
                            Boolean(req.body.isFinish.toLowerCase()),
                            parseInt(req.body.nbTotal),
                            utils.parseIntAndNull(req.body.mangaId),
                            req.body.picture];
                        query = mysql.format(query, table);
                        connection.query(query, function(err, rows) {
                            if (err) {
                                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                            }
                            else {
                                var animeId = rows.insertId;

                                query = "INSERT INTO Translation(Label, LanguageId) VALUES(?, ?)";// + req.body.description +", " + 1 + "?)";
                                table = [
                                    req.body.description,
                                    1
                                ];
                                query = mysql.format(query, table);
                                connection.query(query, function(err, rows) {
                                   if (err) {
                                       res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                                   } else {
                                       var translationId = rows.insertId;

                                       query = "INSERT INTO Link_Anime_Translation(AnimeId, TranslationId) VALUES (?, ?)"// + animeId + ", " + translationId + ")";
                                       table = [
                                           animeId,
                                           translationId
                                       ];
                                       query = mysql.format(query, table);
                                       connection.query(query, function (err, rows) {
                                           if (err) {
                                               res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                                           } else {

                                               var animeTranslationId = rows.insertId;

                                               query = "UPDATE Translation SET LinkAnimeTranslationId = " + animeTranslationId + " WHERE Id = " + translationId;

                                               connection.query(query, function (err, rows) {
                                                   if (err) {
                                                       res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                                                   } else {
                                                       res.json({"Error" : false, "Message" : "Anime added !"});
                                                   }
                                               });
                                           }
                                       })
                                   }
                                });
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
    
    router.get("/animes/:page", function(req, res) {
        //var query = "SELECT * FROM Anime";
        /*var query = "SELECT Anime.Id AS Id, Anime.Title AS Title, Translation.Label AS Description, Anime.IsFinish AS IsFinish, Anime.NbTotal AS NbTotal, Anime.MangaId AS MangaId, Anime.Picture AS Picture, Anime.BeginDate AS BeginDate, Anime.EndDate AS EndDate " +
            "FROM Anime, Link_Anime_Translation, Translation, Language " +
            "WHERE " +
            "Link_Anime_Translation.AnimeId = Anime.Id AND Link_Anime_Translation.TranslationId = Translation.Id " +
            "AND Translation.LanguageId = Language.Id AND Language.Label = 'EN' " +
            "ORDER BY Anime.Id;";
            */

        console.log("current page = ", req.params.page);

        var query = "SELECT R3.NbTotal AS NbTotalPage, R2.Id AS Id, R2.Title AS Title, R2.IsFinish AS IsFinish, R2.NbTotal AS NbTotal, R2.MangaId AS MangaId, R2.Picture AS Picture, R2.BeginDate AS BeginDate, R2.EndDate AS EndDate, R1.Description AS Description " +
            "FROM   (SELECT Anime.Id AS Id, Anime.Title AS Title, Anime.IsFinish AS IsFinish, Anime.NbTotal AS NbTotal, Anime.MangaId AS MangaId, Anime.Picture AS Picture, Anime.BeginDate AS BeginDate, Anime.EndDate AS EndDate " +
            "FROM Anime " +
            "ORDER BY Anime.Id ASC) AS R2 " +
            "LEFT OUTER JOIN " +
            "(SELECT Anime.Id AS Id, Anime.Title AS Title, Translation.Label AS Description, Anime.IsFinish AS IsFinish, Anime.NbTotal AS NbTotal, Anime.MangaId AS MangaId, Anime.Picture AS Picture, Anime.BeginDate AS BeginDate, Anime.EndDate AS EndDate " +
            "FROM Anime " +
            "LEFT JOIN  Link_Anime_Translation ON Link_Anime_Translation.AnimeId = Anime.Id " +
            "LEFT JOIN Translation ON Link_Anime_Translation.TranslationId = Translation.Id " +
            "LEFT JOIN Language ON Translation.LanguageId = Language.Id " +
            "WHERE Language.Label = 'FR' " +
            "ORDER BY Anime.Id ASC " +
            ") AS R1 " +
            "ON R1.Id = R2.Id " +
            "LEFT OUTER JOIN ( " +
            "SELECT COUNT(Anime.Id) AS NbTotal, Anime.Id " +
            "FROM Anime " +
            "ORDER BY Anime.Id ASC) AS R3 " +
            "ON R2.Id = R3.Id " +
            "ORDER BY R2.Id ASC " +
            "LIMIT ?,?;";


        var table = [(req.params.page - 1) * 5, 5];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            }
            else {
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i].Picture == null) {
                        rows[i].Picture = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
                    }
                }
                res.json({"Error" : false, "Message" : "Success", "Animes" : rows});
            }
        });
        console.log(query);
    });

    router.get("/animes/:id", function(req, res) {
        //var query = "SELECT * from Anime WHERE Id = ?";
        /*var query = "SELECT Anime.Id AS Id, Anime.Title AS Title, Translation.Label AS Description, Anime.IsFinish AS IsFinish, Anime.NbTotal AS NbTotal, Anime.MangaId AS MangaId, Anime.Picture AS Picture, Anime.BeginDate AS BeginDate, Anime.EndDate AS EndDate " +
            "FROM Anime, Link_Anime_Translation, Translation, Language " +
            "WHERE Anime.Id = ? " +
            "AND Link_Anime_Translation.AnimeId = Anime.Id AND Link_Anime_Translation.TranslationId = Translation.Id " +
            "AND Translation.LanguageId = Language.Id AND Language.Label = 'EN';";
        */

        var query = "SELECT R2.Id AS Id, R2.Title AS Title, R2.IsFinish AS IsFinish, R2.NbTotal AS NbTotal, R2.MangaId AS MangaId, R2.Picture AS Picture, R2.BeginDate AS BeginDate, R2.EndDate AS EndDate, R1.Description AS Description " +
            "FROM   (SELECT Anime.Id AS Id, Anime.Title AS Title, Anime.IsFinish AS IsFinish, Anime.NbTotal AS NbTotal, Anime.MangaId AS MangaId, Anime.Picture AS Picture, Anime.BeginDate AS BeginDate, Anime.EndDate AS EndDate " +
            "FROM Anime " +
            "WHERE Anime.Id = ? " +
            "ORDER BY Anime.Id ASC) AS R2 " +
            "LEFT OUTER JOIN " +
            "(SELECT Anime.Id AS Id, Anime.Title AS Title, Translation.Label AS Description, Anime.IsFinish AS IsFinish, Anime.NbTotal AS NbTotal, Anime.MangaId AS MangaId, Anime.Picture AS Picture, Anime.BeginDate AS BeginDate, Anime.EndDate AS EndDate " +
            "FROM Anime " +
            "LEFT JOIN  Link_Anime_Translation ON Link_Anime_Translation.AnimeId = Anime.Id " +
            "LEFT JOIN Translation ON Link_Anime_Translation.TranslationId = Translation.Id " +
            "LEFT JOIN Language ON Translation.LanguageId = Language.Id " +
            "WHERE Language.Label = 'EN' AND Anime.Id = ? " +
            "ORDER BY Anime.Id ASC " +
            ") AS R1 " +
            "ON R1.Id = R2.Id;";

        var table = [req.params.id, req.params.id];
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

    router.put("/animes/:id", function(req, res) {
        utils.getToken(connection, req.body.userId, function(response) {
            var tokenBody = req.headers._token;
            if (response === tokenBody) {
                nJwt.verify(response, secretKey, function(err,token){
                    if(err) {
                        res.json({"Error": true, "Message" : "Your token is invalid"});
                    }
                    else {
                        var toUpdate = false;
                        var query = "UPDATE Anime SET";
                        if (req.body.title) {query = query + " Title = " + utils.toString(req.body.title) + ","; toUpdate = true;}
                        //if (req.body.description) {query = query + " Description = " + utils.toString(req.body.description) + ",";}
                        if (req.body.isFinish) {query = query + " IsFinish = " + Boolean(req.body.isFinish) + ","; toUpdate = true;}
                        if (req.body.nbTotal) {query = query + " NbTotal = " + parseInt(req.body.nbTotal) + ","; toUpdate = true;}
                        if (req.body.mangaId) {query = query + " MangaId = " + utils.parseIntAndNull(req.body.mangaId) + ","; toUpdate = true;}
                        if (req.body.picture) {query = query + " Picture = " + utils.toString(req.body.picture) + ","; toUpdate = true;}
                        if (toUpdate)
                            query = query.substring(0, query.length - 1);
                        query = query + " WHERE Id = ?";
                        var table = [parseInt(req.params.id)];
                        query = mysql.format(query, table);

                        if (req.body.description) {

                            var query2 = "SELECT Translation.Id AS Id " +
                                "FROM Anime, Link_Anime_Translation, Translation, Language " +
                                "WHERE Anime.Id = ? " +
                                "AND Link_Anime_Translation.AnimeId = Anime.Id AND Link_Anime_Translation.TranslationId = Translation.Id " +
                                "AND Translation.LanguageId = Language.Id AND Language.Label = 'EN';";

                            var table2 = [req.params.id];
                            query2 = mysql.format(query2, table2);
                            connection.query(query2, function(err, rows) {
                                if (err) {
                                    res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                                } else {
                                    var query3 = "UPDATE Translation SET Label = ? WHERE Id = ?";
                                    var table3 = [
                                        utils.toString(req.body.description),
                                        rows[0].Id
                                    ];
                                    query3 = mysql.format(query3, table3);
                                    connection.query(query3, function (err, rows) {
                                        if (err) {
                                            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                                        } else {
                                            res.json({"Error" : false, "Message" : "Updated anime"});
                                        }
                                    });
                                }
                            });
                        }
                        if (toUpdate) {
                            connection.query(query, function (err, rows) {
                                if (err) {
                                    res.json({"Error": true, "Message": "Error executing MySQL query"});
                                }
                                else {
                                    res.json({"Error": false, "Message": "Updated anime"});
                                }
                            });
                        }
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
            var tokenBody = req.headers._token;
            if (response === tokenBody) {
                nJwt.verify(response, secretKey, function(err,token){
                    if(err) {
                        res.json({"Error": true, "Message" : "Your token is invalid"});
                    } else {
                        var query = "DELETE from Anime WHERE Id = ?";
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

    router.get("/animes/:id/animeItems", function(req, res) {
        var query = "SELECT A.Title as AnimeTitle, AI.Title as ItemTitle, AI.Number as Number, A.NbTotal as NbTotal, AI.Watch, AI.Own FROM Anime_Item as AI, Anime as A WHERE A.Id = AI.AnimeId and AI.AnimeId = ?";
        var table = [parseInt(req.params.id)];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            }
            else {
                res.json({"Error": false, "Message": "Success", "AnimeItems": rows});
            }
        });
    });
};

module.exports = REST_ROUTER;
