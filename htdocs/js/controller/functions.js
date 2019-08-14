
function Functions()
{
    this.Array = new ArrayFunctions();
    this.Select = new SelectFunctions();
    this.Element = new ElementFunctions();
}

Functions.prototype.getCountDescription = function(count, description) {
    var result = count;
    result += ' ';
    result += description;
    if (count != 1) result += "s";
	return result;
}