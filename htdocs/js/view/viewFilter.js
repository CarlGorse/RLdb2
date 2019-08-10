
function ViewFilter(id, dataSet, element)
{
	this.id = id;
	this.dataSet = dataSet;
	this.element = element
	this.items = new Array();
}

function ViewFilterComboBox(id, dataSet, element)
{
	ViewFilter.call(this, id, dataSet, element)
	this.Value = '';
}
ViewFilterComboBox.prototype = Object.create(ViewFilter.prototype)

function ViewFilterCheckBoxList(id, dataSet, element)
{
	ViewFilter.call(this, id, dataSet, element)
	this.Values = '';
}
ViewFilterCheckBoxList.prototype = Object.create(ViewFilter.prototype)

function ViewFilterClub(id, element)
{
	ViewFilterComboBox.call(this, id, data.clubs, element)
}
ViewFilterClub.prototype = Object.create(ViewFilterComboBox.prototype)

function ViewFilterPositions(id, element)
{
	ViewFilterCheckBoxList.call(this, id, data.positions, element)
}
ViewFilterPositions.prototype = Object.create(ViewFilterCheckBoxList.prototype)

function ViewFilterSquadNo(id, element)
{
	ViewFilterComboBox.call(this, id, data.squadNos), element
}
ViewFilterSquadNo.prototype = Object.create(ViewFilterComboBox.prototype)

function ViewFilterHasImage(id, element)
{
	ViewFilterComboBox.call(this, id, data.hasImages, element)
}
ViewFilterHasImage.prototype = Object.create(ViewFilterComboBox.prototype)

function ViewFilterPlayer(id, element)
{
	ViewFilterComboBox.call(this, id, data.players, element)
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

ViewFilterBomboBox.prototype.render = function() {
	
	this.items.forEach(
		function (i) {
			
		}
	)
	
}
