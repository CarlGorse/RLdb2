
function ViewFilterItem(itemId) {
	this.itemId = itemId;
	this.selected == false;	
}
ViewFilterItem.prototype.select = function () { this.selected = true; }
ViewFilterItem.prototype.deselect = function () { this.selected = false; }
