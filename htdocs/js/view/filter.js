
function Filter(id)
{
	this.id = id;
	//this.items = new FilterItems();
	
	function events()
	{
		
		function onSelect()
		{
			controller.data.filters.clear();
			controller.data.filters.add(view.clubFilter.dataFilter);
			controller.data.filters.add(view.positionsFilter.dataFilter);
			controller.data.filters.add(view.squadNoFilter.dataFilter);
			controller.data.filters.add(view.hasImageFilter.dataFilter);
			view.filters.refresh();
		}
		
	}
}

function FilterComboBox(id)
{
	Filter.call(this, id)
	this.Value = '';
}
FilterComboBox.prototype = Object.create(Filter.prototype)

function FilterCheckBoxList(id)
{
	Filter.call(this, id)
	this.Values = '';
}
FilterCheckBoxList.prototype = Object.create(Filter.prototype)

function ClubFilter(id)
{
	FilterComboBox.call(this, id)
}
ClubFilter.prototype = Object.create(FilterComboBox.prototype)

function PositionsFilter(id)
{
	FilterCheckBoxList.call(this, id)
}
PositionsFilter.prototype = Object.create(FilterCheckBoxList.prototype)

function SquadNoFilter(id)
{
	FilterComboBox.call(this, id)
}
SquadNoFilter.prototype = Object.create(FilterComboBox.prototype)

function HasImageFilter(id)
{
	FilterComboBox.call(this, id)
}
HasImageFilter.prototype = Object.create(FilterComboBox.prototype)

function PlayerFilter(id)
{
	FilterComboBox.call(this, id)
}
PlayerFilter.prototype = Object.create(FilterComboBox.prototype)

function FilterItems()
{
	this.items = new Array();
	
	function add(item) { this.items.push(item); }
	
	function index(id) { 
		for (i = 0; i < this.items.length; i++)
		{
			var i = this.items[i];
			if (i.id == id) return i;
		}
	}

	function remove(id)
	{
		var index = this.index(id);
		this.items = this.items.splice(index, 1);
	}
	
}

function FilterItem(id)
{
	this.id = id;
	this.selected == false;
	
	function select() { this.selected = true; }
	function deselect() { this.selected = false; }
	
}
