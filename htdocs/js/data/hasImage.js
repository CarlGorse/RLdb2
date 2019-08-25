
class HasImage extends DataItem {
	
	constructor (hasImageId, text) {
		super (hasImageId, 'Image', 'text');
		this.hasImageId = hasImageId;
		this.text = text;
	}

}