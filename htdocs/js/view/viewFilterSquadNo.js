
function ViewFilterSquadNo(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.squadNos, element, displayProperty);
}
ViewFilterSquadNo.prototype = Object.create(ViewFilterComboBox.prototype)