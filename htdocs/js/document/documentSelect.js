
class DocumentSelect extends DocumentElement {

	constructor (elementId)
	{
		super (elementId);

		this.items = new ArrayHelper();
		
	}

	get value () {
		return this.element.value;
	}

	clear () {
		while(this.element.options.length > 0)
		{
			this.element.options.remove(0);
		}
	}

	remove (index) {
		this.items = this.items.splice(index, 1);
	}

	add (item) {
		this.items.push(item);
	}

	clearValue () {
		this.element.value = "";
	}

	count () {
		return this.element.length;
	}

	selectedIndex () {
		for (let x = 0; x < this.count(); x ++)
		{
			if (this.element.options[x].selected) 
				return x;
		}
	}

	selectOptionByValue (value) {
		for (var i = 0; i < this.element.options.length; i ++)
		{
			let o = this.element.options[i];
			if (o.value == value)
			{
				this.element.options[o.index].selected = 'selected';
				break;
			}
		}
	}

	setValue (dataItemId) { 
		if (!dataItemId) return;
		for (var x = 0; x < this.element.length; x ++)
		{
			let o = this.element.options[x];
			o.selected = false;
			if (o.value == dataItemId.toString()) 
			{
				o.selected = true;
			}
		}
	}

}