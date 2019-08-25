
class HasImages extends DataSet {

	constructor (filename) {
		super ('HasImages', filename)
	}

	add (hasImageId, text) {
		let hi = new HasImage(hasImageId, text);
		this.addHasImage(hi);
	}

	loadFile (file) { 
		file.hasImages.forEach(
			function (hi) { 
				data.hasImages.add(hi, hi); 
			} 
		)
	}

	addHasImage (hi)
	{
		this.addItem(hi);
	}

}