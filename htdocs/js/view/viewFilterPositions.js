
function ViewFilterPositions(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.positions, element, displayProperty, 'positionId');
}
ViewFilterPositions.prototype = Object.create(ViewFilterComboBox.prototype)