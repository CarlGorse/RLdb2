
function ViewFilter(id, dataSet, element, displayProperty)
{
	this.id = id;
	this.dataSet = dataSet;
	this.element = element
	this.displayProperty = displayProperty;
	
	this.items = new Array();
	
}

ViewFilter.prototype.events =  function (id, name) {
	pn = new Position();
	pn.id = id;
	pn.name = name;
	this.addItem(pn);
}

function ViewFilterComboBox(id, dataSet, element, displayProperty)
{
	ViewFilter.call(this, id, dataSet, element, displayProperty);
	this.Value = '';
}
ViewFilterComboBox.prototype = Object.create(ViewFilter.prototype)

function ViewFilterCheckBoxList(id, dataSet, element, displayProperty)
{
	ViewFilter.call(this, id, dataSet, element, displayProperty);
	this.Values = '';
}
ViewFilterCheckBoxList.prototype = Object.create(ViewFilter.prototype)

function ViewFilterClub(id, element, displayProperty)
{
	ViewFilterComboBox.call(this, id, data.clubs, element, displayProperty);
}
ViewFilterClub.prototype = Object.create(ViewFilterComboBox.prototype)

function ViewFilterPositions(id, element, displayProperty)
{
	ViewFilterCheckBoxList.call(this, id, data.positions, element, displayProperty);
}
ViewFilterPositions.prototype = Object.create(ViewFilterCheckBoxList.prototype)

function ViewFilterSquadNo(id, element, displayProperty)
{
	ViewFilterComboBox.call(this, id, data.squadNos, element, displayProperty);
}
ViewFilterSquadNo.prototype = Object.create(ViewFilterComboBox.prototype)

function ViewFilterHasImage(id, element, displayProperty)
{
	ViewFilterComboBox.call(this, id, data.hasImages, element, displayProperty)
}
ViewFilterHasImage.prototype = Object.create(ViewFilterComboBox.prototype)

function ViewFilterPlayer(id, element, displayProperty)
{
	ViewFilterComboBox.call(this, id, data.players, element, displayProperty);
}
ViewFilterPlayer.prototype = Object.create(ViewFilterComboBox.prototype)

ViewFilter.prototype.add = function (item) { this.items.push(item); }

ViewFilter.prototype.index = function (id) { 
	for (i = 0; i < this.items.length; i++)
	{
		var i = this.items[i];
		if (i.id == id) return i;
	}
}

ViewFilter.prototype.remove = function (id) {
		this.items = this.items.splice(index, 1);
}

ViewFilter.prototype.clear = function (id) {
	while(this.items.first)
	{
		this.items.remove(0);
	}
}

ViewFilter.prototype.load = function () {
	
	this.clear();
	
	this.dataSet.items.forEach(
		function (i) {
			this.add(i[this.dataSet.displayProperty]);
		}, this
	)
}

function ViewFilterItem(id) {
	this.id = id;
	this.selected == false;
	
	function select() { this.selected = true; }
	function deselect() { this.selected = false; }
	
}

ViewFilter.prototype.render = function() {}

ViewFilterComboBox.prototype.render = function() {
	
	this.dataSet.items.forEach(
		function (di) {
			option = document.createElement("option");
			option.text = di[this.displayProperty];
			this.element.options.add(option);
		}, this
	)
	
}

