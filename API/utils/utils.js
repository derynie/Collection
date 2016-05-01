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

exports.getToken = function(connection, id)
{
    var query = "SELECT Token FROM User WHERE Id = " + parseInt(id);
    query = mysql.format(query, null);
    connection.query(query, function(err, rows) {
	if (err) {
	    return null;
	}
	else {
	    console.log("test1 = " + rows[0].Token);
	    return rows[0].Token;
	}
    });
}
