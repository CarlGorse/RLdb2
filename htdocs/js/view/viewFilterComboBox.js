
function ViewFilterComboBox(filterId, dataSet, element, displayProperty, searchProperty)
{
	ViewFilter.call(this, filterId, dataSet, element, displayProperty, searchProperty);
	this.setInitialValueEmpty = false;
}
ViewFilterComboBox.prototype = Object.create(ViewFilter.prototype)

