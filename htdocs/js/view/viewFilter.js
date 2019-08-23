
function ViewFilter(elementId, dataSet, displayProperty, searchProperty)
{

	ViewSelect.call(this, elementId, dataSet, displayProperty);
	
	view.filters.items.push(this); 
	
	this.element.onchange = function() {
		view.events.changeFilter(this);
	}
	
	this.searchProperty = searchProperty;
	
	this.setInitalValueEmpty = false;
	this.showNonMatchingDataItems = true;
	this.showDataItemCount = true;
	this.includeInPlayerCount = true;

	this.showOptionAll = true;
	this.showOptionNone = true;

}
ViewFilter.prototype = Object.create(ViewSelect.prototype)

ViewFilter.prototype.select = function (dataItemId)
{
	this.setValue(dataItemId);
}