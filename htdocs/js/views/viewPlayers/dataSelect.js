
class DataSelect extends DocumentSelect{

	constructor (elementId, dataSet, displayProperty)
	{

		super (elementId);

		this.elementId = elementId;
		this.dataSet = dataSet;
		this.displayProperty = displayProperty;

		this.items = new ArrayHelper();
		
		this.setInitialValueEmpty = false;

	}

	index (elementId) { 
		this.items.forEach (
			function (i) {
				if (i.elementId == elementId) return i;
			}, this
		)
	}

	selectedDataItem () {
		var selectedIndex = this.selectedIndex();
		if (this.showOptionAll) { selectedIndex --} ;
		if (this.showOptionNone) { selectedIndex --} ;
		return this.dataSet.items[selectedIndex];
	}

	render () {
		
		let currentValue = this.value

		this.clear();

		this.dataSet.items.forEach (
			function (di) {
				var option = document.createElement("option");
				option.text = di[this.displayProperty];
				option.value = di.id;	
				this.element.add(option);
			}, this
		)

		if (this.element.options.length > 0)
			this.element.options[0].selected = 'selected';

		if (this.setInitialValueEmpty)
			this.clearValue();
		else {
			if (currentValue)
				this.selectOptionByValue(currentValue);
		}

	}

}