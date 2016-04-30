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
