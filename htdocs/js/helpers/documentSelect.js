
function DocumentSelect(elementId)
{
	DocumentElement.call(this, elementId);
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

DocumentSelect.prototype.selectOptionByValue = function(value) {
	for (var i = 0; i < this.element.options.length; i ++)
	{
		o = this.element.options[i];
		if (o.value == value)
		{
			this.element.options[o.index].selected = 'selected';
			break;
		}
	}
}