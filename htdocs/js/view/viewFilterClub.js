
function ViewFilterClub(filterId, viewElement, displayProperty)
{
	ViewFilterSelect.call(this, filterId, data.clubs, viewElement, displayProperty, 'clubId');
	this.showOptionNone = false;
}
ViewFilterClub.prototype = Object.create(ViewFilterSelect.prototype)