var mysql = require("mysql");
var dbConnection = require('../services/dbConnection.service');

var animeController = {
  getAnimes: function(req, res) {
      /*var query = "SELECT * FROM Anime";*/
      /*var query = "SELECT Anime.Id AS Id, Anime.Title AS Title, Translation.Label AS Description, Anime.IsFinish AS IsFinish, Anime.NbTotal AS NbTotal, Anime.MangaId AS MangaId, Anime.Picture AS Picture, Anime.BeginDate AS BeginDate, Anime.EndDate AS EndDate " +
          "FROM Anime, Link_Anime_Translation, Translation, Language " +
          "WHERE " +
          "Link_Anime_Translation.AnimeId = Anime.Id AND Link_Anime_Translation.TranslationId = Translation.Id " +
          "AND Translation.LanguageId = Language.Id AND Language.Label = 'EN' " +
          "ORDER BY Anime.Id;";
          */


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
          "WHERE Language.Label = '" + 'FR' /*req.query.lang*/ +
          "' ORDER BY Anime.Id ASC " +
          ") AS R1 " +
          "ON R1.Id = R2.Id " +
          "LEFT OUTER JOIN ( " +
          "SELECT COUNT(Anime.Id) AS NbTotal, Anime.Id " +
          "FROM Anime " +
          "ORDER BY Anime.Id ASC) AS R3 " +
          "ON R2.Id = R3.Id " +
          "ORDER BY R2.Id ASC "; /* +
          "LIMIT ?,?;";
*/

      //var table = [(req.params.page - 1) * 5, 5];
      //query = mysql.format(query, table);
      query = mysql.format(query);
      dbConnection(function(err, connection) {
          connection.query(query, function(err, rows) {
              connection.release();
              if (err) {
                  res.json({"Error" : true, "Message" : "Error executing MySQL query " + err});
              }
              else {
                  for (var i = 0; i < rows.length; i++) {
                      if (rows[i].Picture == null) {
                          rows[i].Picture = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
                      }
                  }
                  res.json({"code":200, "Message" : "Success", "Animes" : rows});
              }
          });
      });
  }
};

module.exports = animeController;