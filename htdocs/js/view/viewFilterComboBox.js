
function ViewFilterComboBox(filterId, dataSet, element, displayProperty, searchProperty)
{
	ViewFilter.call(this, filterId, dataSet, element, displayProperty, searchProperty);
	this.showOptionAll = true;
}
ViewFilterComboBox.prototype = Object.create(ViewFilter.prototype)

