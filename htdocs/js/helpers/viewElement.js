
function ViewElement(elementId)
{
	this.elementId = elementId;
	this.element = document.getElementById(elementId);
}

ViewElement.prototype.show = function () { this.element.style.display = "block"; }
ViewElement.prototype.hide = function () { this.element.style.display = "none"; }
ViewElement.prototype.setValue = function (value) { this.element.innerHTML = value; }
ViewElement.prototype.value = function () { return this.element.innerHTML; }