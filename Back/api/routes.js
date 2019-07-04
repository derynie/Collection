'use strict';
var bodyParser  = require("body-parser");

var controller = require('./controller');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.route('/about')
        .get(controller.about);
    app.route('/animes')
        .get(controller.getAnimes);
    app.route('/register')
        .post(controller.register);
    app.route('/login')
        .post(controller.login)
};