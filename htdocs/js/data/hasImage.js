
function HasImage(hasImageId, filename)
{
	DataItem.call(this, hasImageId, 'Image', 'text')
	this.hasImageId = hasImageId;
	this.filename = filename;
}
HasImage.prototype = Object.create(DataItem.prototype)