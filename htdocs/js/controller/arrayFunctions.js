
function ArrayFunctions() {}

ArrayFunctions.prototype.clone = function (thisArray) {
	return thisArray.slice(0);
}