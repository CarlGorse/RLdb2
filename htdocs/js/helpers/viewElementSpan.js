

function ViewElementSpan(name)
{
	ViewElement.call(this, name);
}
ViewElementSpan.prototype = Object.create(ViewElement.prototype)

ViewElementSpan.prototype.setValue = function (value) { 
	this.element.textContent = value;
}
ViewElementSpan.prototype.value = function () { return this.element.textContent; }