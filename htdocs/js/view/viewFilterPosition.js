
function ViewFilterPosition(filterId, viewElement, displayProperty)
{
	ViewFilterSelect.call(this, filterId, data.positions, viewElement, displayProperty, 'positionId');
}
ViewFilterPosition.prototype = Object.create(ViewFilterSelect.prototype)