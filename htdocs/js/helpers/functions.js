
function Functions()
{
    
}

Functions.prototype.getCountDescription = function(count, description) {
    var result = count;
    result += ' ';
    result += description;
    if (count != 1) result += "s";
	return result;
}