
function HasImages()
{
	DataSet.call(this, 'HasImages')
}
HasImages.prototype = Object.create(DataSet.prototype)

HasImages.prototype.add =  function (hasImagesId, text) {
	hi = new HasImages(hasImagesId, text);
	this.addItem(hi);
}

HasImages.prototype.loadFile = function (file) { 
	file.hasImages.forEach(
		function (hi) { 
			data.hasImages.add(hi, hi); 
		} 
	)
}

