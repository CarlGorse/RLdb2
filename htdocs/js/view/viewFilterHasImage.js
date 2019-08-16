
function ViewFilterHasImage(filterId, element, displayProperty)
{
	ViewFilterSelect.call(this, filterId, data.hasImages, element, displayProperty, 'hasImageId')
}
ViewFilterHasImage.prototype = Object.create(ViewFilterSelect.prototype)