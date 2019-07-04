var userController = require('../controllers/user.controller');

var userService = {
    register: function(req, res, next) {

        userController.register(req, res, function(result) {
            res.send(result);
        });

    },

    login: function (req, res) {
        userController.login(req, res, function(result) {
            res.send(result);
        });
    }
};

module.exports = userService;