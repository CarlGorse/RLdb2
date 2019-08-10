
function HasImages()
{
	DataSet.call(this, 'HasImages')
}
HasImages.prototype = Object.create(DataSet.prototype)
HasImages.prototype.add =  function (id, text) {
	hi = new HasImages();
	hi.id = id;
	hi.text = text;
	this.addItem(hi);
}