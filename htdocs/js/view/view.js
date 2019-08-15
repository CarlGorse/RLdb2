
function View()
{

	this.events = new ViewEvents(this);
	this.elements = new ViewElements(this);
}

View.prototype.loadDisplay = function () {

	this.elements.playerDetails.hide();
	this.elements.editPlayerDetails.hide();
	controller.loadData();

	this.filters = new ViewFilters();	
	this.filters.initialise();

	this.pComboClub = new ViewComboBox('pComboClub', data.clubs, this.elements.pComboClub.element, 'name2');
	this.pComboPosition = new ViewComboBox('pPositions2', data.positions, this.elements.pComboPosition.element, 'name');
	this.pComboSquadNo = new ViewComboBox('pComboSquadNo', data.squadNos, this.elements.pComboSquadNo.element, 'number');

	this.elements.addPlayer.element.onclick = function() { view.events.addPlayer(); }
	this.elements.editPlayer.element.onclick = function() { view.events.editPlayer(); }
	this.elements.deletePlayer.element.onclick = function() { view.events.deletePlayer(); }

	this.filters.render();

}

//View.prototype.selectFilter = function (filterId) {
	//filter = view.getFilter(filterId);
//}

View.prototype.selectPlayer = function () {

	this.elements.editPlayerDetails.hide();
	this.elements.playerDetails.show();

	p = view.filters.player.player();
	controller.setCurrentPlayer(p);

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
	view.filters.player.clearValue();
	var p = controller.addPlayer();
	controller.setCurrentPlayer(p);
	this.pComboClub.render();
	this.elements.editPlayerDetails.show();
}

View.prototype.editPlayer = function () {
	if (!controller.currentPlayer)
	{
		alert('No player is currently selected');
		return;
	}
	this.elements.playerDetails.hide();

	p = controller.currentPlayer;
	
	view.elements.pName2.setValue(p.name);
	view.elements.pComboClub.setValue(p.clubId);
	view.elements.pComboPosition.setValue(p.position);
	view.elements.pComboSquadNo.setValue(p.squadNo);
	view.elements.pImage2.setValue(p.image);

	this.elements.editPlayerDetails.show();

}

View.prototype.deletePlayer = function () {	
	if (!controller.currentPlayer)
	{
		alert('No player is currently selected');
		return;
	}
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

function ViewEvents() {
//	ViewEvents.prototype.selectFilter = function (filterId) { view.selectFilter(filterId); }
	ViewEvents.prototype.selectPlayer = function () 		{ view.selectPlayer(); }
	ViewEvents.prototype.addPlayer = 	function () 		{ view.addPlayer(); }	
	ViewEvents.prototype.editPlayer = 	function (p) 		{ view.editPlayer(p); }
	ViewEvents.prototype.deletePlayer = function () 		{ view.deletePlayer(); }
	ViewEvents.prototype.savePlayer = 	function () 		{ view.savePlayer(); }	
}