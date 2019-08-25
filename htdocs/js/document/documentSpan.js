
class DocumentSpan extends DocumentElement {

	constructor (name) {
		super (name);
	}
	
	setValue (value) { 
		this.element.textContent = value;
	}
	
	get value () {
		return this.element.textContent;
	}

}