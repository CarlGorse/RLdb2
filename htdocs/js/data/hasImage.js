
function HasImage(hasImageId, text)
{
	DataItem.call(this, hasImageId, 'Image', 'text')
	this.hasImageId = hasImageId;
	this.text = text;
}
HasImage.prototype = Object.create(DataItem.prototype)