
function ViewFilter(filterId, dataSet, element, displayProperty, searchProperty)
{

	ViewComboBox.call(this, filterId, dataSet, element, displayProperty);

	this.searchProperty = searchProperty;
	
	this.setInitalValueEmpty = false;
	this.showNonMatchingDataItems = true;
	this.showDataItemCount = true;

}
ViewFilter.prototype = Object.create(ViewComboBox.prototype)
