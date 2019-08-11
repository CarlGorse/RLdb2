
function HasImages()
{
	DataSet.call(this, 'HasImages')
}
HasImages.prototype = Object.create(DataSet.prototype)

HasImages.prototype.add =  function (hasImageId, text) {
	hi = new HasImage(hasImageId, text);
	this.addHasImage(hi);
}

HasImages.prototype.loadFile = function (file) { 
	file.hasImages.forEach(
		function (hi) { 
			data.hasImages.add(hi, hi); 
		} 
	)
}

HasImages.prototype.addHasImage = function (hi)
{
	this.addItem(hi);
}