
function ArrayHelper()
{
    Array.call(this);
}
ArrayHelper.prototype = Object.create(Array.prototype)

ArrayHelper.prototype.clone = function () {
	return this.slice(0);
}

ArrayHelper.prototype.clear = function () {
	this.length = 0;
}

ArrayHelper.prototype.count = function () {
	return this.length;
}

ArrayHelper.prototype.index = function (findValue, propertyName) {
	for (var x = 0; x < this.count(); x++)
	{
		if (propertyName.length > 0)
		{
			if (this[x][propertyName] == findValue) return x;
		}
		else
		{
			if (this[x] == findValue) return x;
		}
	}
	return null;
}