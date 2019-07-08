var mysql = require("mysql");
const bcrypt = require('bcrypt');
var dbConnection = require('../services/dbConnection.service');

var userController = {

    register: function(req, res) {
        var today = new Date();
        var user = {
            "Name":req.query.name,
            "Email":req.query.email,
            "Password":req.query.password,
            "CreateAt":today,
            "UpdateAt":today
        };

        bcrypt.hash(user.Password, 10, function( err, bcryptedPassword) {
            user.Password = bcryptedPassword;
            dbConnection(function(err, connection) {
                connection.query('INSERT INTO User SET ?',user, function (error, results) {
                    if (error) {
                        console.log("error ocurred",error);
                        res.send({
                            "code":400,
                            "message":"error ocurred" + error
                        })
                    }else{
                        connection.query('SELECT * FROM User WHERE Id = ?', results.insertId, function (error, results) {
                            res.send({
                                "code":200,
                                "message":"user registered sucessfully",
                                "user": {Id: results[0].Id, Name: results[0].Name, Email: results[0].Email, CreateAt: results[0].CreateAt, UpdateAt: results[0].UpdateAt}
                            });
                        });
                    }
                });
            });
        });
    },

    login: function(req, res) {
        var email= req.query.email;
        var password = req.query.password;

        var query = 'SELECT * FROM User WHERE Email = ?';

        dbConnection(function(err, connection) {
            connection.query(query, email, function (error, results, fields) {
                if (error) {
                     console.log("error ocurred",error);
                    res.send({
                        "code":400,
                        "message":"error ocurred"
                    })
                } else {
                    if (results.length > 0) {

                        bcrypt.compare(password, results[0].Password, function(err, resPassword) {
                            // res == true

                            if (resPassword === true) {
                                res.send({
                                    "code":200,
                                    "message":"login sucessfull",
                                    "user": {Id: results[0].Id, Name: results[0].Name, Email: results[0].Email, CreateAt: results[0].CreateAt, UpdateAt: results[0].UpdateAt}
                                });
                            } else {
                                res.send({
                                    "code":204,
                                    "message":"Email and password does not match"
                                });
                            }
                        });
                    } else {
                        res.send({
                            "code":204,
                            "message":"Email does not exits"
                        });
                    }
                }
            });
        });
    }
};

module.exports = userController;