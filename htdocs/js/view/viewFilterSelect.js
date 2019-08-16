
function ViewFilterSelect(filterId, dataSet, viewElement, displayProperty, searchProperty)
{
	ViewFilter.call(this, filterId, dataSet, viewElement, displayProperty, searchProperty);
	this.setInitialValueEmpty = false;
}
ViewFilterSelect.prototype = Object.create(ViewFilter.prototype)

