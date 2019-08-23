
function DocumentSelect(elementId)
{
	DocumentElement.call(this, elementId);
}
DocumentSelect.prototype = Object.create(DocumentElement.prototype)

DocumentSelect.prototype.value = function () { 
	return this.element.value;
}

DocumentSelect.prototype.clear = function () {
	while(this.element.options.length > 0)
	{
		this.element.options.remove(0);
	}
}

DocumentSelect.prototype.remove = function (index) {
	this.items = this.items.splice(index, 1);
}

DocumentSelect.prototype.add = function (item) { this.items.push(item); }

DocumentSelect.prototype.clearValue = function () {
	this.element.value = "";
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