
function ViewFilterHasImage(filterId, element, displayProperty)
{
	ViewFilterSelect.call(this, filterId, data.hasImages, element, displayProperty, 'hasImageId')
	this.showOptionNone = false;
}
ViewFilterHasImage.prototype = Object.create(ViewFilterSelect.prototype)