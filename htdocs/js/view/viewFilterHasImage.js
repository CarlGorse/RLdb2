
function ViewFilterHasImage(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.hasImages, element, displayProperty, 'hasImageId')
}
ViewFilterHasImage.prototype = Object.create(ViewFilterComboBox.prototype)