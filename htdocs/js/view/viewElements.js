
function ViewElements() {}

ViewElements.prototype.initialise = function () {

	this.playerDetails =		new DocumentElement('divPlayerDetails');
	this.editPlayerDetails =	new DocumentElement('editPlayerDetails');

	this.clubFilter = new ViewFilterClub('filterClub', new DocumentSelect('clubFilter'), 'name2');
	this.positionFilter = new ViewFilterPositions('filterPosition', new DocumentSelect('positionFilter'), 'name');
	this.squadNoFilter = new ViewFilterSquadNo('filterSquadNo', new DocumentSelect('squadNoFilter'), 'number');
	this.hasImageFilter = new ViewFilterHasImage('filterHasImage', new DocumentSelect('hasImageFilter'), 'text');
	this.playerFilter = new ViewFilterPlayer('filterPlayer', new DocumentSelect('playerFilter'), 'name');

	this.playerFilter.element.onchange = function() { view.events.selectPlayer(); }

	this.filteredPlayersCount = new DocumentSpan('filteredPlayersCount');

	this.pName = 		new DocumentElement('pName');
	this.pClub = 		new DocumentElement('pClub');
	this.pPosition = 	new DocumentElement('pPosition');
	this.pSquadNo = 	new DocumentElement('pSquadNo');
	this.pImage = 		new DocumentImage('pImage');
		
	this.pName2 = 			new DocumentInput('pName2');
	this.pClub2 = 		new ViewSelect('pClub2', data.clubs, new DocumentSelect('pClub2'), 'name2');
	this.pPosition2 = 	new ViewSelect('pPositions2', data.positions, new DocumentSelect('pPosition2'), 'name');
	this.pSquadNo2 = 	new ViewSelect('pSquadNo2', data.squadNos, new DocumentSelect('pSquadNo2'), 'number');
	this.pImage2 = 			new DocumentInput('pImage2');

	this.addPlayer = 	new DocumentButton('addPlayer');
	this.editPlayer = 	new DocumentButton('editPlayer');
	this.deletePlayer = new DocumentButton('deletePlayer');
	this.editPlayer.disable();
	this.deletePlayer.disable();

	this.addPlayer.setOnClick(view.events.addPlayer);
	this.editPlayer.setOnClick(view.events.editPlayer);
	this.deletePlayer.setOnClick(view.events.deletePlayer);

}