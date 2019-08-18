
function ArrayFunctions() {}

ArrayFunctions.prototype.clone = function (thisArray) {
	return thisArray.slice(0);
}

ArrayFunctions.prototype.clear = function (thisArray) {
	thisArray.length = 0;
}

ArrayFunctions.prototype.getItemIndex = function (thisArray, itemValue, itemProperty) {
	for (var x = 0; x < thisArray.length; x++)
	{
		if (itemProperty.length > 0)
		{
			if (thisArray[x][itemProperty] == itemValue) return x;
		}
		else
		{
			if (thisArray[x] == itemValue) return x;
		}
	}
	return null;
}