
class DocumentInput extends DocumentElement {

	constructor (elementId)
	{
		super (elementId);
	}

	setValue (value) { 
		this.element.value = value; 
	}

	get value () {
		return this.element.value;
	}

}