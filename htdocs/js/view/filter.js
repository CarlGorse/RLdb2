
FilterComboBox.prototype = Object.create(Filter.prototype)
FilterCheckBoxList.prototype = Object.create(Filter.prototype)
ClubFilter.prototype = Object.create(FilterComboBox.prototype)
PositionsFilter.prototype = Object.create(FilterCheckBoxList.prototype)
SquadNoFilter.prototype = Object.create(FilterComboBox.prototype)
HasImageFilter.prototype = Object.create(FilterComboBox.prototype)
PlayerFilter.prototype = Object.create(FilterComboBox.prototype)

function Filter(id)
{
	this.id = id;
	this.items = new FilterItems();
	
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

function FilterCheckBoxList(id)
{
	Filter.call(this, id)
	this.Values = '';
}

function ClubFilter(id)
{
	FilterComboBox.call(this, id)
}

function PositionsFilter(id)
{
	FilterCheckBoxList.call(this, id)
}

function SquadNoFilter(id)
{
	FilterComboBox.call(this, id)
}

function HasImageFilter(id)
{
	FilterComboBox.call(this, id)
}

function PlayerFilter(id)
{
	FilterComboBox.call(this, id)
}

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
	
	function select() { this.selected = true;)
	function deselect() { this.selected = false;)
	
}
