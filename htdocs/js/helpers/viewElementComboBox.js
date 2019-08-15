
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
	if (!this.element.options) return "";
	if (this.element.options.length == 0) return "";
	//if (!this.element.selectedIndex) return ""; errors for first index = 0
	if (this.element.selectedIndex < 0) return "";
	return this.element.options[this.element.selectedIndex].value;
}

ViewElementComboBox.prototype.clear = function () {
	while(this.element.options.length > 0)
	{
		this.element.options.remove(0);
	}
}