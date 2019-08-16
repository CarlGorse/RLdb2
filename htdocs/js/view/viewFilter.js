
function ViewFilter(filterId, dataSet, viewElement, displayProperty, searchProperty)
{

	ViewComboBox.call(this, filterId, dataSet, viewElement, displayProperty);

	this.showOptionAll = true;
	
	view.filters.items.push(this); 
	
	this.element().onchange = function() {
		view.events.changeFilter(this);
	}
	
	this.searchProperty = searchProperty;
	
	this.setInitalValueEmpty = false;
	this.showNonMatchingDataItems = true;
	this.showDataItemCount = true;

}
ViewFilter.prototype = Object.create(ViewComboBox.prototype)

