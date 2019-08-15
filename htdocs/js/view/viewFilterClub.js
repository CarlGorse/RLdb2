
function ViewFilterClub(filterId, viewElement, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.clubs, viewElement, displayProperty, 'clubId');
}
ViewFilterClub.prototype = Object.create(ViewFilterComboBox.prototype)