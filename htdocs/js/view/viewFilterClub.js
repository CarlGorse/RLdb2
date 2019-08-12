
function ViewFilterClub(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.clubs, element, displayProperty, 'clubId');
}
ViewFilterClub.prototype = Object.create(ViewFilterComboBox.prototype)