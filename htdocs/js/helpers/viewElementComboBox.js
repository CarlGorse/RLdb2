
function ViewElementComboBox(name)
{
	ViewElement.call(this, name);
}
ViewElementComboBox.prototype = Object.create(ViewElement.prototype)

ViewElementComboBox.prototype.setValue = function (itemId) { 
	for (var x = 0; x < this.element.length; x ++)
	{
		o = this.element.options[x];
		o.selected = false;
		if (o.value == itemId) o.selected = true;
	}
}
ViewElementComboBox.prototype.value = function () { 
	return this.element.value;
}

ViewElementComboBox.prototype.clear = function () {
	while(this.element.options.length > 0)
	{
		this.element.options.remove(0);
	}
}