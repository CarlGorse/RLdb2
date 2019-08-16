
function DocumentButton(name)
{
	DocumentElement.call(this, name);
}
DocumentButton.prototype = Object.create(DocumentElement.prototype)

DocumentButton.prototype.disable = function () { this.element.disabled = true; }

DocumentButton.prototype.enable = function () { this.element.disabled = false; }

DocumentButton.prototype.setOnClick = function(func) {
    this.element.onclick = func;
}