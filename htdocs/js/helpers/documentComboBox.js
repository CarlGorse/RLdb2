
function DocumentComboBox(name)
{
	DocumentElement.call(this, name);
}
DocumentComboBox.prototype = Object.create(DocumentElement.prototype)

DocumentComboBox.prototype.setValue = function (itemId) { 
	for (var x = 0; x < this.element.length; x ++)
	{
		o = this.element.options[x];
		o.selected = false;
		if (o.value == itemId) o.selected = true;
	}
}
DocumentComboBox.prototype.value = function () { 
	return this.element.value;
}

DocumentComboBox.prototype.clear = function () {
	while(this.element.options.length > 0)
	{
		this.element.options.remove(0);
	}
}