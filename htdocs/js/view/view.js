
function View()
{

	this.events = new ViewEvents(this);
	this.elements = new ViewElements(this);

	this.clubFilter = new ViewFilterClub('clubFilter', this.elements.clubFilter.element, 'name2');
	this.positionFilter = new ViewFilterPositions('positionFilter', this.elements.positionFilter.element, 'name');
	this.squadNoFilter = new ViewFilterSquadNo('squadNoFilter', this.elements.squadNoFilter.element, 'number');
	this.hasImageFilter = new ViewFilterHasImage('hasImageFilter', this.elements.hasImageFilter.element, 'text');
	this.playerFilter = new ViewFilterPlayer('playerFilter', this.elements.playerFilter.element, 'name');
	this.pClub2 = new ViewFilterClub('pClub2', this.elements.pClub2.element, 'name2');
	this.pPosition2 = new ViewFilterPositions('pPositions2', this.elements.pPosition2.element, 'name');
	this.pSquadNo2 = new ViewFilterSquadNo('pSquadNo2', this.elements.pSquadNo2.element, 'number');


	this.searchFilters = new ViewFilters();
	[this.clubFilter, this.positionFilter, this.squadNoFilter, this.hasImageFilter].forEach ( 
		function (f) { 
			f.element.onclick = function() {view.events.selectPlayer(f);}
			this.searchFilters.items.push(f); 
		}, this ) ;

	this.allFilters = new ViewFilters();
	[this.clubFilter, this.positionFilter, this.squadNoFilter, this.hasImageFilter, this.playerFilter, this.pClub2, this.pPosition2, this.pSquadNo2].forEach(
		function (f) {
			this.allFilters.items.push(f);
		}, this
	);

	this.playerFilter.setInitialValueEmpty = true;
	
}

View.prototype.loadDisplay =  function () {
	this.hidePlayerDetails();
	this.hideEditPlayerDetails();
	controller.loadData();
	this.allFilters.render();
	
	var count = functions.getCountDescription(data.players.count(), 'player');
	this.elements.filteredPlayersCount.setValue(count);
	
}

View.prototype.selectFilter = function (filterId) {
	filter = view.getFilter(filterId);
}

View.prototype.selectPlayer = function () {
	
	view.hideEditPlayerDetails();
	view.showPlayerDetails();
		
	p = view.playerFilter.player();
	controller.setCurrentPlayer(p);
		
	view.elements.pName.setValue(p.name);
	view.elements.pClub.setValue(data.clubs.club(p.clubId).name2);
	view.elements.pPosition.setValue(data.positions.position(p.positionId).name);
	view.elements.pSquadNo.setValue(p.squadNo);
	
	if (p.image)
		view.elements.pImage.element.style.display = "block";
	else
		view.elements.pImage.element.style.display = "none";
	view.elements.pImage.setValue(p.image);
	
}

View.prototype.addPlayer = function () {
	view.playerFilter.clearValue();
	var p = controller.addPlayer();
	controller.setCurrentPlayer(p);
	view.showEditPlayer();
}

View.prototype.editPlayer = function () {
	view.showEditPlayer();
}

View.prototype.deletePlayer = function () {
	var p = controller.currentPlayer;	// save current player before deleted from data/controller
	controller.deletePlayer(p);
	controller.savePlayers();
	view.showMessage('Player ' + p.name + ' deleted.');
}

View.prototype.savePlayer = function () {
	var p = controller.currentPlayer;
	p.name = view.elements.pName2.value();
	p.clubId = view.elements.pClub2.value();
	p.positionId = view.elements.pPosition2.value();
	p.squadNo = view.elements.pSquadNo2.value();
	p.image = view.elements.pImage2.value();
	
	controller.savePlayers();
	view.showMessage('Player ' + controller.currentPlayer.name + ' saved.');
}

View.prototype.showMessage = function (text) {
	alert(text);
}

View.prototype.getFilter = function (filterId) {
	return view.filters.item(filterId);
}

View.prototype.showEditPlayer = function () {

	view.hidePlayerDetails();
	
	p = controller.currentPlayer;
	
	view.elements.pName2.setValue(p.name);
	view.elements.pClub2.setValue(p.clubId);
	view.elements.pPosition2.setValue(p.position);
	view.elements.pSquadNo2.setValue(p.squadNo);
	view.elements.pImage2.setValue(p.image);
		
	this.showEditPlayerDetails();
		
}

View.prototype.showPlayerDetails = 		function () { this.elements.playerDetails.show(); }
View.prototype.hidePlayerDetails = 		function () { this.elements.playerDetails.hide(); }
View.prototype.showEditPlayerDetails = 	function () { this.elements.editPlayerDetails.show(); }
View.prototype.hideEditPlayerDetails = 	function () { this.elements.editPlayerDetails.hide(); }

function ViewEvents() {
	ViewEvents.prototype.selectFilter = function (filterId) { view.selectFilter(filterId); }
	ViewEvents.prototype.selectPlayer = function () 		{ view.selectPlayer(); }
	ViewEvents.prototype.addPlayer = 	function () 		{ view.addPlayer(); }	
	ViewEvents.prototype.editPlayer = 	function (p) 		{ view.editPlayer(p); }
	ViewEvents.prototype.deletePlayer = function () 		{ view.deletePlayer(); }
	ViewEvents.prototype.savePlayer = 	function () 		{ view.savePlayer(); }	
}