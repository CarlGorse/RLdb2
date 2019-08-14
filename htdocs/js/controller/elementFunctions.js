
function ElementFunctions()
{
}
ElementFunctions.prototype.show = function(thisElement) {
	thisElement.style.display = "block";
}

ElementFunctions.prototype.hide = function(thisElement) {
	thisElement.style.display = "none";
}