
function ViewFilter(filterId, dataSet, element, displayProperty, searchProperty)
{

	ViewComboBox.call(this, filterId, dataSet, element, displayProperty);

	this.showOptionAll = true;
	
	view.filters.items.push(this); 
	
	this.element.onchange = function() {
		view.events.changeFilter(this);
	}
	
	this.searchProperty = searchProperty;
	
	this.setInitalValueEmpty = false;
	this.showNonMatchingDataItems = true;
	this.showDataItemCount = true;

}
ViewFilter.prototype = Object.create(ViewComboBox.prototype)
