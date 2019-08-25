
class DocumentImage extends DocumentElement {

	constructor (elementId) {
		super (elementId);
	}

	setImage (value) { 
		this.element.src = value;
	}

	clear () { 
		this.element.src = "";
	}

}