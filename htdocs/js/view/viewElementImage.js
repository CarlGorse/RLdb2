
function ViewElementImage(name)
{
	ViewElement.call(this, name);
}
ViewElementImage.prototype = Object.create(ViewElement.prototype)
ViewElementImage.prototype.setValue = function (value) { this.element.src = "images\\" + value; }