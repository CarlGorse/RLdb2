
function ViewFilterSelect(elementId, dataSet, displayProperty, searchProperty)
{
	ViewFilter.call(this, elementId, dataSet, displayProperty, searchProperty);
	this.setInitialValueEmpty = false;
}
ViewFilterSelect.prototype = Object.create(ViewFilter.prototype)

