
function ViewFilterPositions(filterId, viewElement, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.positions, viewElement, displayProperty, 'positionId');
}
ViewFilterPositions.prototype = Object.create(ViewFilterComboBox.prototype)