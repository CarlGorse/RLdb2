
function ViewFilters()
{
	this.items = new Array();
}

ViewFilters.prototype.initialise = function () {
	this.club = new ViewFilterClub('filterClub', view.elements.clubFilter, 'name2');
	this.position = new ViewFilterPositions('filterPosition', view.elements.positionFilter, 'name');
	this.squadNo = new ViewFilterSquadNo('filterSquadNo', view.elements.squadNoFilter, 'number');
	this.hasImage = new ViewFilterHasImage('filterHasImage', view.elements.hasImageFilter, 'text');
	this.player = new ViewFilterPlayer('filterPlayer', view.elements.playerFilter, 'name');

	this.player.element.onchange = function() { view.events.selectPlayer(); }
}

ViewFilters.prototype.add = function (filter) {
	this.items.push(filter);
} 

ViewFilters.prototype.render =  function () { 
	
	this.items.forEach( 
		function (f) { 
			f.render();
		} 
	) 
	
}

ViewFilters.prototype.first = function () {
	this.items[0];
} 

ViewFilters.prototype.item = function (filterId) {
	this.items.forEach( function (f)
		{
			if (f.filterId == filterId) return f;
		}
	)
} 