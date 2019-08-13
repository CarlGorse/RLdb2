
function ViewFilterComboBox(filterId, dataSet, element, displayProperty, searchProperty)
{
	ViewFilter.call(this, filterId, dataSet, element, displayProperty, searchProperty);
}
ViewFilterComboBox.prototype = Object.create(ViewFilter.prototype)

ViewFilterComboBox.prototype.render = function () {
	
	currentValue = this.value();

	this.clear();
	
	var option = document.createElement("option");
	option.text = '[all]';
	option.value = 'all';		
	this.element.add(option);

	this.dataSet.items.forEach(
		function (di) {
			
			var option = document.createElement("option");
			option.text = di[this.displayProperty];

			var playerCount = controller.playerCountByFilter(this, di);
			option.text += " (" + playerCount + ")";

			option.value = di.id;
			
			this.element.add(option);

		}, this
	)

	this.element.options[0].selected = 'selected';

	if (this.setInitialValueEmpty)
		this.clearValue();
	else {

		// select new option that matches previous value
		if (currentValue)
		{
			for (var i = 0; i < this.element.options.length; i ++)
			{
				o = this.element.options[i];
				if (o.value == this.currentValue)
				{
					this.element.options[o.index].selected = selected;
					break;
				}
			}
		}
	}

}

ViewFilterComboBox.prototype.clearValue = function () {
		this.element.value = "";
}

ViewFilter.prototype.value =  function () {
	if (!this.element.options) return "";
	if (!this.element.selectedIndex) return "";
	if (this.element.length == 0) return "";
	return this.element.options[this.element.selectedIndex].value;
}
