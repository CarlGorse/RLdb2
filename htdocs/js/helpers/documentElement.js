
function DocumentElement(elementId)
{
	this.elementId = elementId;
	this.element = document.getElementById(elementId);
}

DocumentElement.prototype.show = function () { this.element.style.display = "block"; }
DocumentElement.prototype.hide = function () { this.element.style.display = "none"; }
DocumentElement.prototype.setValue = function (value) { this.element.innerHTML = value; }
DocumentElement.prototype.value = function () { return this.element.innerHTML; }