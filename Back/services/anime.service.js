var animeController = require('../controllers/anime.controller');

var animeService = {
    getAnimeById: function(req, res, next) {

        animeController.getAnimes(req, res, function(result) {
            res.send(result);
        });

    }
};

module.exports = animeService;