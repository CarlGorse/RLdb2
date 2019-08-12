
function ViewFilterSquadNo(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.squadNos, element, displayProperty, 'squadNoId');
}
ViewFilterSquadNo.prototype = Object.create(ViewFilterComboBox.prototype)