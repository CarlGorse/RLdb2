
function View()
{

	this.events = new ViewEvents(this);
	this.elements = new ViewElements(this);

	this.clubFilter = new ViewFilterClub('clubFilter', this.elements.clubFilter, 'name2');
	this.positionsFilter = new ViewFilterPositions('positionsFilter', this.elements.positionsFilter, 'name');
	this.squadNoFilter = new ViewFilterSquadNo('squadNoFilter', this.elements.squadNoFilter, 'number');
	this.hasImageFilter = new ViewFilterHasImage('hasImageFilter', this.elements.hasImageFilter, 'text');
	this.playerFilter = new ViewFilterPlayer('playerFilter', this.elements.playerFilter, 'name');
	this.pClub2 = new ViewFilterClub('pClub2', this.elements.pClub2, 'name2');
	this.pPositions2 = new ViewFilterPositions('pPositions2', this.elements.pPositions2, 'name');
	this.pSquadNo2 = new ViewFilterSquadNo('pSquadNo2', this.elements.pSquadNo2, 'number');
	
	this.filters = new ViewFilters();
	[this.clubFilter, this.positionsFilter, this.squadNoFilter, this.hasImageFilter, this.playerFilter, this.pClub2, this.pPositions2, this.pSquadNo2].forEach(
		function (f) {
			this.filters.items.push(f);
		}, this
	);
	
}

View.prototype.loadDisplay =  function () {
	this.hidePlayerDetails();
	this.hideEditPlayerDetails();
	controller.loadData();
	this.filters.refresh();
}


function ViewEvents() {
ViewEvents.prototype.selectFilter = function (filterId) { view.selectFilter(filterId); }
ViewEvents.prototype.addPlayer = 	function () 		{ view.addPlayer(); }	
ViewEvents.prototype.editPlayer = 	function (p) 		{ view.editPlayer(p); }
ViewEvents.prototype.deletePlayer = function () 		{ view.deletePlayer(); }
ViewEvents.prototype.savePlayer = 	function () 		{ view.savePlayer(); }	
}

View.prototype.selectFilter = function (filterId) {
	filter = view.getFilter(filterId);
	filter.events.onSelect();
}

View.prototype.selectPlayer = function () {
	
	view.hideEditPlayerDetails();
	view.showPlayerDetails();
		
	p = view.element.playerFilter.player;
	controller.setCurrentPlayer(p);
		
	view.element.pName = p.name.displayValue;
	view.element.pClub = p.club.name.displayValue;
	view.element.pPositions = p.positions.displayValue;
	view.element.pSquadNo = p.squadNo.displayValue;
}

View.prototype.addPlayer = function () {
	var p = new Player();
	controller.setCurrentPlayer(p);
	view.showEditPlayer();
}

View.prototype.editPlayer = function () {
	view.showEditPlayer();
}

View.prototype.deletePlayer = function () {
	var p = controller.currentPlayer;	// save current player before deleted from data/controller
	controller.deletePlayer(p);
	view.showMessage('Player ' + p.name + ' deleted.');
}

View.prototype.savePlayer = function () {
	controller.savePlayer();
	view.showMessage('Player ' + controller.currentPlayer.name + ' saved.');
}

View.prototype.getFilter = function (filterId) {
	return view.filters.First(f => f.filterId = filterId);
}

View.prototype.showEditPlayer = function () {

	view.hidePlayerDetails();
	
	p = controller.currentPlayer;
	
	view.elements.pName2.setValue(p.name);
	view.elements.pClub2.setValue(p.clubId);
	view.elements.pPositions2.setValue(p.positions);
	view.elements.pSquadNo2.setValue(p.squadNo);
	view.elements.pImage2.setValue(p.image);
		
	this.showEditPlayerDetails();
		
}

View.prototype.showPlayerDetails = 		function () { this.elements.playerDetails.show(); }
View.prototype.hidePlayerDetails = 		function () { this.elements.playerDetails.hide(); }
View.prototype.showEditPlayerDetails = 	function () { this.elements.editPlayerDetails.show(); }
View.prototype.hideEditPlayerDetails = 	function () { this.elements.editPlayerDetails.hide(); }

function ViewElements() {
	
	this.pName = 		this.element('pName');
	this.pClub = 		this.element('pClub');
	this.pPositions = 	this.element('pPositions');
	this.pSquadNo = 	this.element('pSquadNo');
	this.pImage = 		this.element('pImage');
		
	this.pName2 = 		this.element('pName2');
	this.pClub2 = 		this.element('pClub2');
	this.pPositions2 = 	this.element('pPositions2');
	this.pSquadNo2 = 	this.element('pSquadNo2');
	this.pImage2 = 		this.element('pImage2');
	
	this.playerDetails =		this.element('playerDetails');
	this.editPlayerDetails =	this.element('editPlayerDetails');
	
	this.clubFilter =	this.element('clubFilter');
	this.positionsFilter =	this.element('positionsFilter');
	this.squadNoFilter =	this.element('squadNoFilter');
	this.hasImageFilter =	this.element('hasImageFilter');
	this.playerFilter =	this.element('playerFilter');

}
ViewElements.prototype.element = 	function (elementId) { return document.getElementById(elementId); }

Element.prototype.show = function () { this.style.display = "block"; }
Element.prototype.hide = function () { this.style.display = "none"; }
Element.prototype.setValue = function (v) { this.innerHTML = v; }
