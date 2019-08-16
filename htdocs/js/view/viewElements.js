
function ViewElements() {}

ViewElements.prototype.initialise = function () {

	this.playerDetails =		new ViewElement('divPlayerDetails');
	this.editPlayerDetails =	new ViewElement('editPlayerDetails');

	this.clubFilter = new ViewFilterClub('filterClub', new ViewElementComboBox('clubFilter'), 'name2');
	this.positionFilter = new ViewFilterPositions('filterPosition', new ViewElementComboBox('positionFilter'), 'name');
	this.squadNoFilter = new ViewFilterSquadNo('filterSquadNo', new ViewElementComboBox('squadNoFilter'), 'number');
	this.hasImageFilter = new ViewFilterHasImage('filterHasImage', new ViewElementComboBox('hasImageFilter'), 'text');
	this.playerFilter = new ViewFilterPlayer('filterPlayer', new ViewElementComboBox('playerFilter'), 'name');

	this.playerFilter.element.onchange = function() { view.events.selectPlayer(); }

	this.filteredPlayersCount = new ViewElementSpan('filteredPlayersCount');

	this.pName = 		new ViewElement('pName');
	this.pClub = 		new ViewElement('pClub');
	this.pPosition = 	new ViewElement('pPosition');
	this.pSquadNo = 	new ViewElement('pSquadNo');
	this.pImage = 		new ViewElementImage('pImage');
		
	this.pName2 = 			new ViewElementInput('pName2');
	this.pComboClub = 		new ViewComboBox('pComboClub', data.clubs, new ViewElementComboBox('pComboClub'), 'name2');
	this.pComboPosition = 	new ViewComboBox('pPositions2', data.positions, new ViewElementComboBox('pComboPosition'), 'name');
	this.pComboSquadNo = 	new ViewComboBox('pComboSquadNo', data.squadNos, new ViewElementComboBox('pComboSquadNo'), 'number');
	this.pImage2 = 			new ViewElementInput('pImage2');

	this.addPlayer = 	new ViewButton('addPlayer', view.events.addPlayer)
	this.editPlayer = 	new ViewButton('editPlayer', view.events.editPlayer)
	this.deletePlayer = new ViewButton('deletePlayer', view.events.deletePlayer)

	this.addPlayer.setOnClick = view.events.addPlayer;
	this.editPlayer.setOnClick = view.events.editPlayer;
	this.deletePlayer.setOnClick = view.events.deletePlayer;

}