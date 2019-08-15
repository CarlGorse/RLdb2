
function ViewFilterComboBox(filterId, dataSet, viewElement, displayProperty, searchProperty)
{
	ViewFilter.call(this, filterId, dataSet, viewElement, displayProperty, searchProperty);
	this.setInitialValueEmpty = false;
}
ViewFilterComboBox.prototype = Object.create(ViewFilter.prototype)

