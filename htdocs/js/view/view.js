
function View()
{

	this.clubFilter = new ClubFilter();
	this.positionsFilter = new PositionsFilter();
	this.squadNoFilter = new SquadNoFilter();
	this.hasImageFilter = new HasImageFilter();
	this.playerFilter = new PlayerFilter();
	this.club2Filter = new ClubFilter();
	this.positions2Filter = new PositionsFilter(Filter);
	this.squadNoFilter = new SquadNoFilter();
	
	this.filters = new Filters();
	this.filters.add([this.clubFilter, this.positionsFilter, this.squadNoFilter, this.hasImageFilter, this.playerFilter, this.club2Filter, this.positions2Filter, this.squadNoFilter]);
	
	this.events = new Events(this);
	this.elements = new Elements(this);
}

View.prototype.loadDisplay =  function () {
	this.hidePlayerDetails();
	this.hideEditPlayerDetails();
	this.controller.loadData();
	this.filters.refresh();
}


function Events(controller) {
	this.controller = controller;
	this.view = controller.view;
}
Events.prototype.onSelectFilter = 	function (filterId) { this.view.selectFilter(filterId); }
Events.prototype.onAddPlayer = 		function () 		{ this.view.addPlayer(); }	
Events.prototype.onEditPlayer = 	function (p) 		{ this.view.editPlayer(p); }
Events.prototype.onDeletePlayer = 	function () 		{ this.view.deletePlayer(); }
Events.prototype.onSavePlayer = 	function () 		{ this.view.savePlayer(); }	

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
	var p = view.playerFilter.player;
	controller.setCurrentPlayer(p);
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
		
	view.element.pName2.setValue(p.name.value);
	view.element.pClub2.setValue(p.club.value);
	view.element.pPositions2.setValue(p.positions.values);
	view.element.pSquadNo2.setValue(p.squadNo.value);
	view.element.pImage2.setValue = p.image.value;
		
	this.showEditPlayerDetails();
		
}

View.prototype.showPlayerDetails = 		function () { this.elements.playerDetails.show(); }
View.prototype.hidePlayerDetails = 		function () { this.elements.playerDetails.hide(); }
View.prototype.showEditPlayerDetails = 	function () { this.elements.editPlayerDetails.show(); }
View.prototype.hideEditPlayerDetails = 	function () { this.elements.editPlayerDetails.hide(); }

function Elements(view) {
	
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

}
Elements.prototype.element = 	function (elementId) { return new Element(elementId); }

function Element(elementId) {
	this.object = document.getElementById(elementId);
}
Element.prototype.show = function () { this.object.style = "block"; }
Element.prototype.hide = function () { this.object.style = "none"; }
