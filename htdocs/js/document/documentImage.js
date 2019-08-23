
function DocumentImage(elementId)
{
	DocumentElement.call(this, elementId);
}
DocumentImage.prototype = Object.create(DocumentElement.prototype)

DocumentImage.prototype.setImage = function (value) { 
	this.element.src = value;
}

DocumentImage.prototype.clear = function () { 
	this.element.src = "";
}