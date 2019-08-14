
function ViewFilterSquadNo(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.squadNos, element, displayProperty, 'squadNo');
}
ViewFilterSquadNo.prototype = Object.create(ViewFilterComboBox.prototype)