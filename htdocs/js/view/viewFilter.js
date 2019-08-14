
function ViewFilter(filterId, dataSet, element, displayProperty, searchProperty)
{
	this.filterId = filterId;
	this.dataSet = dataSet;
	this.element = element
	this.displayProperty = displayProperty;
	this.searchProperty = searchProperty;
	
	this.items = new Array();
	this.setInitalValueEmpty = false;

	this.showNonMatchingDataItems = true;
	
}

ViewFilter.prototype.render = function () {
	this.clear();
}

ViewFilter.prototype.value =  function () {
	return this.element.options[this.element.selectedIndex].value;
}

ViewFilter.prototype.add = function (item) { this.items.push(item); }

ViewFilter.prototype.index = function (filterId) { 
	for (i = 0; i < this.items.length; i++)
	{
		var i = this.items[i];
		if (i.filterId == filterId) return i;
	}
}

ViewFilter.prototype.remove = function (index) {
	this.items = this.items.splice(index, 1);
}

ViewFilter.prototype.clear = function () {
	
}

