
function ViewFilterComboBox(filterId, dataSet, element, displayProperty)
{
	ViewFilter.call(this, filterId, dataSet, element, displayProperty);
}
ViewFilterComboBox.prototype = Object.create(ViewFilter.prototype)

ViewFilterComboBox.prototype.render = function () {
	
	this.clear();
	
	this.dataSet.items.forEach(
		function (i) {
			var option = document.createElement("option");
			option.text = i[this.displayProperty];
			option.value = i.id;
			this.element.add(option);
		}, this
	)

	if (this.setInitialValueEmpty)
		this.element.value = "";
}