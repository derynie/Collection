var mysql = require('mysql');

var pool      =    mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'quentin',
    password : 'toto1705//',
    database : 'collection',
    debug    :  false
});

var getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};

module.exports = getConnection;