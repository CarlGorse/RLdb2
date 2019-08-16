
function ViewFilterSquadNo(filterId, element, displayProperty)
{
	ViewFilterSelect.call(this, filterId, data.squadNos, element, displayProperty, 'squadNo');
}
ViewFilterSquadNo.prototype = Object.create(ViewFilterSelect.prototype)