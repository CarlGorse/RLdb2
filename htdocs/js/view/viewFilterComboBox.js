
function ViewFilterComboBox(filterId, dataSet, element, displayProperty, searchProperty)
{
	ViewFilter.call(this, filterId, dataSet, element, displayProperty, searchProperty);
}
ViewFilterComboBox.prototype = Object.create(ViewFilter.prototype)

ViewFilterComboBox.prototype.render = function () {
	
	this.clear();
	
	this.dataSet.items.forEach(
		function (i) {
			
			var option = document.createElement("option");
			option.text = i[this.displayProperty];

			var playerCount = controller.playerCountByFilter(this, i);
			option.text += " (" + playerCount + ")";

			option.value = i.id;
			
			this.element.add(option);

		}, this
	)

	if (this.setInitialValueEmpty)
		this.clearValue();
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
