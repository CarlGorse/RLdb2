
function ViewSelect(elementId, dataSet, displayProperty)
{

	DocumentSelect.call(this, elementId);

	this.elementId = elementId;
	this.dataSet = dataSet;
	this.displayProperty = displayProperty;

	this.items = new ArrayHelper();
	
	this.setInitialValueEmpty = false;
	this.showDataItemCount = false;

}
ViewSelect.prototype = Object.create(DocumentSelect.prototype)

ViewSelect.prototype.add = function (item) { this.items.push(item); }

ViewSelect.prototype.index = function (elementId) { 
	for (i = 0; i < this.items.length; i++)
	{
		var i = this.items[i];
		if (i.elementId == elementId) return i;
	}
}

ViewSelect.prototype.remove = function (index) {
	this.items = this.items.splice(index, 1);
}

ViewSelect.prototype.render = function () {
	
	currentValue = this.value();

	this.clear();
	
	if (this.showOptionAll)
	{
		var option = document.createElement("option");
		option.text = '[all]';
		option.value = 'all';
		this.element.add(option);
	}

	if (this.showOptionNone)
	{
		var option = document.createElement("option");
		option.text = '[none]';
		option.value = 'none';
		var count = controller.playerCountByFilter(this, "none");
		if (count > 0)
			option.text += " (" + count + ")";
		this.element.add(option);
	}

	this.dataSet.items.forEach(
		function (di) {

			var playerCount = controller.playerCountByFilter(this, di[this.searchProperty]);
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

	if (this.element.options.length > 0)
		this.element.options[0].selected = 'selected';

	if (this.setInitialValueEmpty)
		this.clearValue();
	else {
		if (currentValue)
			this.selectOptionByValue(currentValue);
	}

}

ViewSelect.prototype.clearValue = function () {
	this.element.value = "";
}

ViewSelect.prototype.selectedDataItem = function()
{
	var selectedIndex = this.selectedIndex();
	if (this.showOptionAll) { selectedIndex --} ;
	if (this.showOptionNone) { selectedIndex --} ;
	return this.dataSet.items[selectedIndex];
}
