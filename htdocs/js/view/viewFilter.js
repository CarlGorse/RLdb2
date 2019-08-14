
function ViewFilter(filterId, dataSet, element, displayProperty, searchProperty)
{
	this.filterId = filterId;
	this.dataSet = dataSet;
	this.element = element
	this.displayProperty = displayProperty;
	this.searchProperty = searchProperty;
	
	this.items = new Array();
	
	this.setInitalValueEmpty = false;
	this.showNonMatchingDataItems = false;
	this.showDataItemCount = true;

}

ViewFilter.prototype.render = function () {
	this.clear();
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
	while(this.items.first)
	{
		this.items.remove(0);
	}
}

function ViewFilterItem(itemId) {
	this.itemId = itemId;
	this.selected == false;
	
	function select() { this.selected = true; }
	function deselect() { this.selected = false; }
	
}


