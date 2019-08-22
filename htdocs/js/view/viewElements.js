
function ViewElements() {}

ViewElements.prototype.initialise = function () {

	this.playerDetails =		new DocumentElement('divPlayerDetails');
	this.editPlayerDetails =	new DocumentElement('editPlayerDetails');

	this.clubFilter = 		new ViewFilterClub('filterClub', new DocumentSelect('clubFilter'), 'name2');
	this.positionFilter = 	new ViewFilterPosition('filterPosition', new DocumentSelect('positionFilter'), 'name');
	this.squadNoFilter = 	new ViewFilterSquadNo('filterSquadNo', new DocumentSelect('squadNoFilter'), 'number');
	this.hasImageFilter = 	new ViewFilterHasImage('filterHasImage', new DocumentSelect('hasImageFilter'), 'text');
	this.playerFilter = 	new ViewFilterPlayer('filterPlayer', new DocumentSelect('playerFilter'), 'name');

	this.playerFilter.element.onchange = function() { view.events.selectPlayerBySelect(); }

	this.filteredPlayersCount = new DocumentSpan('filteredPlayersCount');

	this.movePlayerFirst =  	new DocumentButton('movePlayerFirst', view.events.movePlayerFirst);
	this.movePlayerPrevious = 	new DocumentButton('movePlayerPrevious', view.events.movePlayerPrevious);
	this.movePlayerNext = 		new DocumentButton('movePlayerNext', view.events.movePlayerNext);
	this.movePlayerLast = 		new DocumentButton('movePlayerLast', view.events.movePlayerLast);

	this.playersTable = new ViewTablePlayers('playersTable', data.players);

	this.pName = 		new DocumentElement('pName');
	this.pClub = 		new DocumentElement('pClub');
	this.pPosition = 	new DocumentElement('pPosition');
	this.pSquadNo = 	new DocumentElement('pSquadNo');
	this.pImage = 		new DocumentImage('pImage');
		
	this.pName2 = 		new DocumentInput('pName2');
	this.pClub2 = 		new ViewSelect('pClub2', data.clubs, new DocumentSelect('pClub2'), 'name2');
	this.pPosition2 = 	new ViewSelect('pPositions2', data.positions, new DocumentSelect('pPosition2'), 'name');
	this.pSquadNo2 = 	new ViewSelect('pSquadNo2', data.squadNos, new DocumentSelect('pSquadNo2'), 'number');
	this.pImage2 = 		new DocumentInput('pImage2');

	this.movePageFirst =  	new DocumentButton('movePageFirst', view.events.movePageFirst);
	this.movePagePrevious = new DocumentButton('movePagePrevious', view.events.movePagePrevious);
	this.movePageNext = 	new DocumentButton('movePageNext', view.events.movePageNext);
	this.movePageLast = 	new DocumentButton('movePageLast', view.events.movePageLast);

	this.addPlayer = 	new DocumentButton('addPlayer', view.events.addPlayer);
	this.editPlayer = 	new DocumentButton('editPlayer', view.events.editPlayer);
	this.deletePlayer = new DocumentButton('deletePlayer', view.events.deletePlayer);
	this.savePlayer = 	new DocumentButton('savePlayer', view.events.savePlayer);
	this.editPlayer.disable();
	this.deletePlayer.disable();

	this.pageCount = 	new DocumentSpan('pageCount');

}