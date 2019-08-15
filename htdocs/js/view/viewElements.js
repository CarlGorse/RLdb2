
function ViewElements() {
	
	this.pName = 		new ViewElement('pName');
	this.pClub = 		new ViewElement('pClub');
	this.pPosition = 	new ViewElement('pPosition');
	this.pSquadNo = 	new ViewElement('pSquadNo');
	this.pImage = 		new ViewElementImage('pImage');
		
	this.pName2 = 		new ViewElementInput('pName2');
	this.pComboClub = 		new ViewElementComboBox('pComboClub');
	this.pComboPosition = 	new ViewElementComboBox('pComboPosition');
	this.pComboSquadNo = 	new ViewElementComboBox('pComboSquadNo');
	this.pImage2 = 		new ViewElementInput('pImage2');
	
	this.playerDetails =		new ViewElement('divPlayerDetails');
	this.editPlayerDetails =	new ViewElement('editPlayerDetails');
	
	this.clubFilter =		new ViewElementComboBox('clubFilter');
	this.positionFilter =	new ViewElementComboBox('positionFilter');
	this.squadNoFilter =	new ViewElementComboBox('squadNoFilter');
	this.hasImageFilter =	new ViewElementComboBox('hasImageFilter');
	this.playerFilter =		new ViewElementComboBox('playerFilter');

	this.filteredPlayersCount = new ViewElementSpan('filteredPlayersCount');

	this.addPlayer = new ViewElement('addPlayer');
	this.editPlayer = new ViewElement('editPlayer');
	this.deletePlayer = new ViewElement('deletePlayer');

}