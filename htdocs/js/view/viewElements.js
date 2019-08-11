
function ViewElements() {
	
	this.pName = 		new ViewElement('pName');
	this.pClub = 		new ViewElement('pClub');
	this.pPosition = 	new ViewElement('pPosition');
	this.pSquadNo = 	new ViewElement('pSquadNo');
	this.pImage = 		new ViewElementImage('pImage');
		
	this.pName2 = 		new ViewElementInput('pName2');
	this.pClub2 = 		new ViewElementComboBox('pClub2');
	this.pPosition2 = 	new ViewElementComboBox('pPosition2');
	this.pSquadNo2 = 	new ViewElementComboBox('pSquadNo2');
	this.pImage2 = 		new ViewElementInput('pImage2');
	
	this.playerDetails =		new ViewElement('playerDetails');
	this.editPlayerDetails =	new ViewElement('editPlayerDetails');
	
	this.clubFilter =		new ViewElementComboBox('clubFilter');
	this.positionsFilter =	new ViewElementComboBox('positionsFilter');
	this.squadNoFilter =	new ViewElementComboBox('squadNoFilter');
	this.hasImageFilter =	new ViewElementComboBox('hasImageFilter');
	this.playerFilter =		new ViewElementComboBox('playerFilter');

}