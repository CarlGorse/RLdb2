
function DocumentImage(name)
{
	DocumentElement.call(this, name);
}
DocumentImage.prototype = Object.create(DocumentElement.prototype)
DocumentImage.prototype.setValue = function (value) { this.element.src = "images\\" + value; }