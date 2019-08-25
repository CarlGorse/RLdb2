
class DocumentElement {

	constructor (elementId) {
		this.elementId = elementId;
		this.element = document.getElementById(elementId);
	}

	show () {
		this.element.style.display = "block";
	}

	hide () {
		this.element.style.display = "none";
	}

	setValue (value) {
		this.element.innerHTML = value;
	}

	get value () {
		return this.element.innerHTML;
	}

}