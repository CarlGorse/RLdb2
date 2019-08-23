
function ViewFilterHasImage(elementId, displayProperty)
{
	ViewFilterSelect.call(this, elementId, data.hasImages, displayProperty, 'hasImageId')
	this.showOptionNone = false;
}
ViewFilterHasImage.prototype = Object.create(ViewFilterSelect.prototype)