var mysql = require("mysql");

exports.parseIntAndNull = function(number)
{
    if (!parseInt(number))
    {
	return null;
    }
    else {
	return parseInt(number);
    }
}

exports.toString = function(string)
{
    string = string.replace(/"/g, "\\\"");
    string = "\"" + string + "\"";
    return string;
}

var getToken = function(connection, id, callback) {
    var query = "SELECT Token FROM User WHERE Id = " + parseInt(id);
    query = mysql.format(query, null);
    connection.query(query, function(err, rows) {
	if (err) {
	    return callback(null);
	}
	else {
	    return callback(rows[0].Token);
	}
    });
}



exports.getToken = getToken;
