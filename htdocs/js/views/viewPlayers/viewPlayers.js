
class ViewPlayers {
	
	constructor () {

		this.events = new ViewEvents(this);
		this.elements = new ViewElements(this);
		this.filters = new ViewSearchFilters();
	}

	loadDisplay () {

		controller.loadData();

		this.events.initialise();
		this.elements.initialise();
		this.filters.initialise();

		this.hidePlayerDetails();
		this.hideEditPlayerDetails();

		this.elements.editPlayer.disable();
		this.elements.deletePlayer.disable();

		this.filters.render();

	}

	selectPlayer (playerId) {

		this.hideEditPlayerDetails();

		this.elements.playerFilter.select(playerId);

		var p = controller.currentPlayer;
		viewPlayers.elements.pForename.setValue(p.forename);
		viewPlayers.elements.pSurname.setValue(p.surname);
		viewPlayers.elements.pClub.setValue(data.clubs.club(p.clubId).name2);
		viewPlayers.elements.pPosition.setValue( p.positionId ? data.positions.position(p.positionId).name : '');
		viewPlayers.elements.pSquadNo.setValue(p.squadNo);
		if (p.image)
			this.elements.pImage.show();
		else
			this.elements.pImage.hide();
		viewPlayers.elements.pImage.setImage("images\\players\\" + p.image);
		
		this.elements.playerDetails.show();

		viewPlayers.elements.editPlayer.enable();
		viewPlayers.elements.deletePlayer.enable();

		this.elements.savePlayer.hide();

	}

	deselectPlayer () {
		
		this.hidePlayerDetails();
		
		this.elements.playerFilter.deselect();

		viewPlayers.elements.editPlayer.disable();
		viewPlayers.elements.deletePlayer.disable();

	}

	addPlayer (forename, surname, clubId, positionId, squadNo, image) {
		viewPlayers.elements.playerFilter.clearValue();
		var p = data.players.add(forename, surname, clubId, positionId, squadNo, image);		
		controller.setCurrentPlayer(p.playerId);
		this.showEditPlayerDetails();
	}

	editPlayer () {
		this.showEditPlayerDetails();
	}

	showEditPlayerDetails () {
		
		this.hidePlayerDetails();

		this.elements.pClub2.render();
		this.elements.pPosition2.render();
		this.elements.pSquadNo2.render();
		
		var p = controller.currentPlayer;
		viewPlayers.elements.pForename2.setValue(p.forename);
		viewPlayers.elements.pSurname2.setValue(p.surname);
		viewPlayers.elements.pClub2.setValue(p.clubId);
		viewPlayers.elements.pPosition2.setValue(p.positionId);
		viewPlayers.elements.pSquadNo2.setValue(p.squadNo);
		viewPlayers.elements.pImage2.setValue(p.image);

		this.elements.editPlayerDetails.show();
		this.elements.savePlayer.show();
	}

	hidePlayerDetails ()
	{
		this.elements.playerDetails.hide();
		this.elements.pImage.hide();
	}

	hideEditPlayerDetails ()
	{
		this.elements.editPlayerDetails.hide();
	}
	
	savePlayer () {
		
		var p = controller.currentPlayer;
		p.forename = viewPlayers.elements.pForename2.value;
		p.surname = viewPlayers.elements.pSurname2.value;
		p.clubId = viewPlayers.elements.pClub2.value;
		p.positionId = viewPlayers.elements.pPosition2.value;
		p.squadNo = viewPlayers.elements.pSquadNo2.value;
		p.image = viewPlayers.elements.pImage2.value;
		
		data.players.save(p);
		
		this.loadDisplay();

		viewPlayers.showMessage('Player \'' + controller.currentPlayer.name + '\' saved.');

	}

	deletePlayer () {	
		
		if (confirm('Do you wish to delete player \'' + controller.currentPlayer.name + '\'?') == false)
			return;
		
		var p = controller.currentPlayer;	// save current player before deleted from data/controller
		
		data.players.remove(p);
		
		this.loadDisplay();

		viewPlayers.showMessage('Player \'' + p.name + '\' deleted.');
	}

	showMessage (text) {
		alert(text);
	}

}