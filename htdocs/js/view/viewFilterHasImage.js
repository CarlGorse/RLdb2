
function ViewFilterHasImage(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.hasImages, element, displayProperty)
}
ViewFilterHasImage.prototype = Object.create(ViewFilterComboBox.prototype)