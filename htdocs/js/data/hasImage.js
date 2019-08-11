
function Image(id, filename)
{
	DataItem.call(this, id, 'Image', 'text')
	this.filename = filename;
}
Image.prototype = Object.create(DataItem.prototype)