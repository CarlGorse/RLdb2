
function DocumentImage(elementId)
{
	DocumentElement.call(this, elementId);
}
DocumentImage.prototype = Object.create(DocumentElement.prototype)

DocumentImage.prototype.setValue = function (value) { 
	this.element.src = "images\\" + value; 
}