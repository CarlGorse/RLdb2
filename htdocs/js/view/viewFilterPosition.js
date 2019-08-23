
function ViewFilterPosition(elementId, displayProperty)
{
	ViewFilterSelect.call(this, elementId, data.positions, displayProperty, 'positionId');
}
ViewFilterPosition.prototype = Object.create(ViewFilterSelect.prototype)