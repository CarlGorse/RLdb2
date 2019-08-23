
function View() {

	this.events = new ViewEvents(this);
	this.elements = new ViewElements(this);
	this.filters = new ViewFilters();
}

View.prototype.loadDisplay = function () {

	controller.loadData();

	this.events.initialise();
	this.elements.initialise();
	this.filters.initialise();

	this.hidePlayerDetails();
	this.hideEditPlayerDetails();

	this.filters.render();

}

View.prototype.hideEditPlayerDetails = function ()
{
	this.elements.editPlayerDetails.hide();
}

View.prototype.deselectPlayer = function () {
	
	this.hidePlayerDetails();
	
	this.elements.playerFilter.deselect();

	view.setButtons();

}

View.prototype.selectPlayer = function (playerId) {

	this.hideEditPlayerDetails();

	this.elements.playerFilter.select(playerId);

	var p = controller.currentPlayer;
	view.elements.pForename.setValue(p.forename);
	view.elements.pSurname.setValue(p.surname);
	view.elements.pClub.setValue(data.clubs.club(p.clubId).name2);
	view.elements.pPosition.setValue( p.positionId ? data.positions.position(p.positionId).name : '');
	view.elements.pSquadNo.setValue(p.squadNo);
	if (p.image)
		this.elements.pImage.show();
	else
		this.elements.pImage.hide();
	view.elements.pImage.setImage("images\\players\\" + p.image);
	
	this.elements.playerDetails.show();

	view.setButtons();

	this.elements.savePlayer.hide();

}

View.prototype.setButtons = function ()
{
	if (controller.currentPlayer == null)
	{
		view.elements.editPlayer.disable();
		view.elements.deletePlayer.disable();
	}
	else
	{
		view.elements.editPlayer.enable();
		view.elements.deletePlayer.enable();
	}
}

View.prototype.addPlayer = function () {
	view.elements.playerFilter.clearValue();
	var p = controller.addPlayer();
	controller.setCurrentPlayer(p.playerId);
	this.showEditPlayerDetails();
}

View.prototype.editPlayer = function () {
	this.showEditPlayerDetails();
}

View.prototype.showEditPlayerDetails = function () {
	
	this.hidePlayerDetails();

	this.elements.pClub2.render();
	this.elements.pPosition2.render();
	this.elements.pSquadNo2.render();
	
	var p = controller.currentPlayer;
	view.elements.pForename2.setValue(p.forename);
	view.elements.pSurname2.setValue(p.surname);
	view.elements.pClub2.setValue(p.clubId);
	view.elements.pPosition2.setValue(p.positionId);
	view.elements.pSquadNo2.setValue(p.squadNo);
	view.elements.pImage2.setValue(p.image);

	this.elements.editPlayerDetails.show();
	this.elements.savePlayer.show();
}

View.prototype.hidePlayerDetails = function ()
{
	this.elements.playerDetails.hide();
	this.elements.pImage.hide();
}

View.prototype.deletePlayer = function () {	
	
	if (confirm('Do you wish to delete player \'' + controller.currentPlayer.name + '\'?') == false)
		return;
	
	var p = controller.currentPlayer;	// save current player before deleted from data/controller
	
	controller.deletePlayer(p);
	controller.savePlayers();
	
	this.loadDisplay();

	view.showMessage('Player \'' + p.name + '\' deleted.');
}

View.prototype.savePlayer = function () {
	
	var p = controller.currentPlayer;
	p.forename = view.elements.pForename2.value();
	p.surname = view.elements.pSurname2.value();
	p.setName();
	p.clubId = view.elements.pClub2.value();
	p.positionId = view.elements.pPosition2.value();
	p.squadNo = view.elements.pSquadNo2.value();
	p.image = view.elements.pImage2.value();
	
	controller.savePlayers();
	
	this.loadDisplay();

	view.showMessage('Player \'' + controller.currentPlayer.name + '\' saved.');

}

View.prototype.showMessage = function (text) {
	alert(text);
}
