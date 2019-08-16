

function DocumentSpan(name)
{
	DocumentElement.call(this, name);
}
DocumentSpan.prototype = Object.create(DocumentElement.prototype)

DocumentSpan.prototype.setValue = function (value) { 
	this.element.textContent = value;
}
DocumentSpan.prototype.value = function () { return this.element.textContent; }