
function ViewElementButton(name)
{
	ViewElement.call(this, name);
}
ViewElementButton.prototype = Object.create(ViewElement.prototype)

ViewElementButton.prototype.disable = function () { this.element.disabled = true; }

ViewElementButton.prototype.enable = function () { this.element.disabled = false; }
