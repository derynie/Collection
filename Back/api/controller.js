'use strict';

var properties = require('../package.json');
var anime = require('../services/anime.service');
var user = require('../services/user.service');

var controllers = {
    about: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        };
        res.json(aboutInfo);
    },
    getAnimes: function (req, res) {
        anime.getAnimeById(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        })
    },
    register: function (req, res) {
        console.log(req);
        user.register(req, res, function (err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        })
    },
    login: function (req, res) {
        user.login(req, res, function (err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        })
    }
};

module.exports = controllers;