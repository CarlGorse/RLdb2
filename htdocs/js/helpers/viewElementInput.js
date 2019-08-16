
function ViewElementInput(elementId)
{
	ViewElement.call(this, elementId);
}
ViewElementInput.prototype = Object.create(ViewElement.prototype)
ViewElementInput.prototype.setValue = function (value) { 
	this.element.value = value; 
}
ViewElementInput.prototype.value = function () { return this.element.value; }