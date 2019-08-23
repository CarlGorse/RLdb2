
function ViewFilterSquadNo(elementId, displayProperty)
{
	ViewFilterSelect.call(this, elementId, data.squadNos, displayProperty, 'squadNo');
}
ViewFilterSquadNo.prototype = Object.create(ViewFilterSelect.prototype)