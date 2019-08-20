
function DocumentInput(elementId)
{
	DocumentElement.call(this, elementId);
}
DocumentInput.prototype = Object.create(DocumentElement.prototype)

DocumentInput.prototype.setValue = function (value) { 
	this.element.value = value; 
}

DocumentInput.prototype.value = function () { return this.element.value; }