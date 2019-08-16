
function ViewFilterPositions(filterId, viewElement, displayProperty)
{
	ViewFilterSelect.call(this, filterId, data.positions, viewElement, displayProperty, 'positionId');
}
ViewFilterPositions.prototype = Object.create(ViewFilterSelect.prototype)