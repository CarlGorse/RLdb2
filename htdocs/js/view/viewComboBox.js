
function ViewComboBox(filterId, dataSet, viewElement, displayProperty)
{
	this.filterId = filterId;
	this.dataSet = dataSet;
	this.viewElement = viewElement
	this.displayProperty = displayProperty;
	
	this.items = new Array();
	
	this.setInitialValueEmpty = false;
	this.showDataItemCount = false;

	this.element = this.viewElement.element;

}

ViewComboBox.prototype.add = function (item) { this.items.push(item); }

ViewComboBox.prototype.index = function (filterId) { 
	for (i = 0; i < this.items.length; i++)
	{
		var i = this.items[i];
		if (i.filterId == filterId) return i;
	}
}

ViewComboBox.prototype.remove = function (index) {
	this.items = this.items.splice(index, 1);
}

ViewComboBox.prototype.render = function () {
	
	currentValue = this.element.value;

	this.clear();
	
	if (this.showOptionAll)
	{
		var option = document.createElement("option");
		option.text = '[all]';
		option.value = 'all';
		this.element.add(option);
	}

	this.dataSet.items.forEach(
		function (di) {

			var playerCount = controller.playerCountByFilter(this, di);
			if ((this.showNonMatchingDataItems) || (playerCount > 0))
			{
				var option = document.createElement("option");
				option.text = di[this.displayProperty];

				if (this.showDataItemCount)
				{
					if (playerCount > 0)
						option.text += " (" + playerCount + ")";
				}

				option.value = di.id;
				
				this.element.add(option);
			}

		}, this
	)

	this.element.options[0].selected = 'selected';

	if (this.setInitialValueEmpty)
		this.clearValue();
	else {
		if (currentValue)
			functions.Select.selectOptionByValue(this.element, currentValue);
	}

}

ViewComboBox.prototype.clearValue = function () {
	this.element.value = "";
}

ViewComboBox.prototype.clear = function () {
	this.viewElement.clear();
}

ViewComboBox.prototype.value = function () {
	return this.viewElement.value();
}

ViewComboBox.prototype.setValue = function (value) {
	return this.viewElement.setValue(value);
}