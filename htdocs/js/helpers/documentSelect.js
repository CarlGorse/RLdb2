
function DocumentSelect(name)
{
	DocumentElement.call(this, name);
}
DocumentSelect.prototype = Object.create(DocumentElement.prototype)

DocumentSelect.prototype.setValue = function (itemId) { 
	for (var x = 0; x < this.element.length; x ++)
	{
		o = this.element.options[x];
		o.selected = false;
		if (o.value == itemId.toString()) 
		{
			o.selected = true;
		}
	}
}
DocumentSelect.prototype.value = function () { 
	return this.element.value;
}

DocumentSelect.prototype.clear = function () {
	while(this.element.options.length > 0)
	{
		this.element.options.remove(0);
	}
}

DocumentSelect.prototype.count = function () {
	return this.element.length;
}

DocumentSelect.prototype.selectedIndex = function () {
	for (x = 0; x < this.count(); x ++)
	{
		if (this.element.options[x].selected) 
			return x;
	}
}