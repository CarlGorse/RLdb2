
function ArrayFunctions() {}

ArrayFunctions.prototype.clone = function (thisArray) {
	return thisArray.slice(0);
}

ArrayFunctions.prototype.clear = function (thisArray) {
	thisArray.length = 0;
}