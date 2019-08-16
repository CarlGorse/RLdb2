
function ViewFilterClub(filterId, viewElement, displayProperty)
{
	ViewFilterSelect.call(this, filterId, data.clubs, viewElement, displayProperty, 'clubId');
}
ViewFilterClub.prototype = Object.create(ViewFilterSelect.prototype)