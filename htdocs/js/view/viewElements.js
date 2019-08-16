
function ViewElements() {}

ViewElements.prototype.initialise = function () {

	this.playerDetails =		new DocumentElement('divPlayerDetails');
	this.editPlayerDetails =	new DocumentElement('editPlayerDetails');

	this.clubFilter = new ViewFilterClub('filterClub', new DocumentComboBox('clubFilter'), 'name2');
	this.positionFilter = new ViewFilterPositions('filterPosition', new DocumentComboBox('positionFilter'), 'name');
	this.squadNoFilter = new ViewFilterSquadNo('filterSquadNo', new DocumentComboBox('squadNoFilter'), 'number');
	this.hasImageFilter = new ViewFilterHasImage('filterHasImage', new DocumentComboBox('hasImageFilter'), 'text');
	this.playerFilter = new ViewFilterPlayer('filterPlayer', new DocumentComboBox('playerFilter'), 'name');

	this.playerFilter.element.onchange = function() { view.events.selectPlayer(); }

	this.filteredPlayersCount = new DocumentSpan('filteredPlayersCount');

	this.pName = 		new DocumentElement('pName');
	this.pClub = 		new DocumentElement('pClub');
	this.pPosition = 	new DocumentElement('pPosition');
	this.pSquadNo = 	new DocumentElement('pSquadNo');
	this.pImage = 		new DocumentImage('pImage');
		
	this.pName2 = 			new DocumentInput('pName2');
	this.pComboClub = 		new ViewComboBox('pComboClub', data.clubs, new DocumentComboBox('pComboClub'), 'name2');
	this.pComboPosition = 	new ViewComboBox('pPositions2', data.positions, new DocumentComboBox('pComboPosition'), 'name');
	this.pComboSquadNo = 	new ViewComboBox('pComboSquadNo', data.squadNos, new DocumentComboBox('pComboSquadNo'), 'number');
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