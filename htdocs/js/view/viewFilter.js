
function ViewFilter(filterId, dataSet, element, displayProperty)
{
	this.filterId = filterId;
	this.dataSet = dataSet;
	this.element = element
	this.displayProperty = displayProperty;
	
	this.items = new Array();
	
}

ViewFilter.prototype.render = function () {
	
	this.clear();
	
}

function ViewFilterComboBox(filterId, dataSet, element, displayProperty)
{
	ViewFilter.call(this, filterId, dataSet, element, displayProperty);
}
ViewFilterComboBox.prototype = Object.create(ViewFilter.prototype)

ViewFilter.prototype.value =  function () {
	return this.element.options[this.element.selectedIndex].value;
}

function ViewFilterCheckBoxList(filterId, dataSet, element, displayProperty)
{
	ViewFilter.call(this, filterId, dataSet, element, displayProperty);
	this.Values = '';
}
ViewFilterCheckBoxList.prototype = Object.create(ViewFilter.prototype)

function ViewFilterClub(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.clubs, element, displayProperty);
}
ViewFilterClub.prototype = Object.create(ViewFilterComboBox.prototype)

function ViewFilterPositions(filterId, element, displayProperty)
{
	ViewFilterCheckBoxList.call(this, filterId, data.positions, element, displayProperty);
}
ViewFilterPositions.prototype = Object.create(ViewFilterCheckBoxList.prototype)

function ViewFilterSquadNo(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.squadNos, element, displayProperty);
}
ViewFilterSquadNo.prototype = Object.create(ViewFilterComboBox.prototype)

function ViewFilterHasImage(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.hasImages, element, displayProperty)
}
ViewFilterHasImage.prototype = Object.create(ViewFilterComboBox.prototype)

function ViewFilterPlayer(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.players, element, displayProperty);
}
ViewFilterPlayer.prototype = Object.create(ViewFilterComboBox.prototype)

ViewFilterPlayer.prototype.player = function () {
	return data.getPlayerById(this.value());
}

ViewFilter.prototype.add = function (item) { this.items.push(item); }

ViewFilter.prototype.index = function (filterId) { 
	for (i = 0; i < this.items.length; i++)
	{
		var i = this.items[i];
		if (i.filterId == filterId) return i;
	}
}

ViewFilter.prototype.remove = function (index) {
	this.items = this.items.splice(index, 1);
}

ViewFilter.prototype.clear = function () {
	while(this.items.first)
	{
		this.items.remove(0);
	}
}

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
}

function ViewFilterItem(itemId) {
	this.itemId = itemId;
	this.selected == false;
	
	function select() { this.selected = true; }
	function deselect() { this.selected = false; }
	
}


