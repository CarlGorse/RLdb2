
function View() {

	this.events = new ViewEvents(this);
	this.elements = new ViewElements(this);
	this.filters = new ViewFilters();
}

View.prototype.loadDisplay = function () {

	this.events.initialise();
	this.elements.initialise();
	this.filters.initialise();

	this.elements.playerDetails.hide();
	this.elements.editPlayerDetails.hide();
	
	controller.loadData();

	this.filters.render();

}

//View.prototype.selectFilter = function (filterId) {
	//filter = view.getFilter(filterId);
//}

View.prototype.selectPlayer = function () {

	this.elements.editPlayerDetails.hide();
	this.elements.playerDetails.show();

	p = view.elements.playerFilter.player();
	controller.setCurrentPlayer(p);

	view.elements.editPlayer.enable();
	view.elements.deletePlayer.enable();

	view.elements.pName.setValue(p.name);
	view.elements.pClub.setValue(data.clubs.club(p.clubId).name2);
	view.elements.pPosition.setValue(data.positions.position(p.positionId).name);
	view.elements.pSquadNo.setValue(p.squadNo);
	
	if (p.image)
		this.elements.pImage.show();
	else
		this.elements.pImage.hide();
	view.elements.pImage.setValue(p.image);
	
}

View.prototype.addPlayer = function () {
	view.elements.playerFilter.clearValue();
	var p = controller.addPlayer();
	controller.setCurrentPlayer(p);
	this.showEditPlayerDetails();
}

View.prototype.editPlayer = function () {
	this.showEditPlayerDetails();
}

View.prototype.showEditPlayerDetails = function () {
	
	this.elements.playerDetails.hide();

	this.elements.pComboClub.render();
	this.elements.pComboPosition.render();
	this.elements.pComboSquadNo.render();

	p = controller.currentPlayer;

	view.elements.pName2.setValue(p.name);
	view.elements.pComboClub.setValue(p.clubId);
	view.elements.pComboPosition.setValue(p.positionId);
	view.elements.pComboSquadNo.setValue(p.squadNo);
	view.elements.pImage2.setValue(p.image);

	this.elements.editPlayerDetails.show();
}

View.prototype.deletePlayer = function () {	
	if (confirm('Do you wish to delete player ' + controller.currentPlayer.name + '?') == false)
		return;
	var p = controller.currentPlayer;	// save current player before deleted from data/controller
	controller.deletePlayer(p);
	controller.savePlayers();
	view.showMessage('Player ' + p.name + ' deleted.');
}

View.prototype.savePlayer = function () {
	var p = controller.currentPlayer;
	p.name = view.elements.pName2.value();
	p.clubId = view.elements.pComboClub.value();
	p.positionId = view.elements.pComboPosition.value();
	p.squadNo = view.elements.pComboSquadNo.value();
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
