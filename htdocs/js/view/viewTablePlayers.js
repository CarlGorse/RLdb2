
function ViewTablePlayers(elementId, dataSet)
{
	DocumentTable.call(this, elementId);
	this.dataSet = dataSet;
}
ViewTablePlayers.prototype = Object.create(DocumentTable.prototype)

ViewTablePlayers.prototype.render = function() {

	view.elements.playersTable.clear();

	controller.setFilteredPlayers();

	var pagePtr = 0;
	if (controller.currentPlayer != null)
	{
		var playerIndex = controller.filteredPlayers.index(controller.currentPlayer.playerId);
		pagePtr = Math.floor(playerIndex / 10);
	}
	
	for (var x = 0; x < 10; x ++)
	{
		var playerPtr = x + (pagePtr * 10);	
		if (playerPtr >= controller.filteredPlayers.count()) break;

		var row = this.element.insertRow();
		var playerId = controller.filteredPlayers.items[playerPtr].playerId;
		row.playerId = playerId;
		row.onclick = function() { 
			view.events.selectPlayerByTable(this); 
		}
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);	
		var cell3 = row.insertCell(3);
		p = data.players.item(playerId);
		cell0.innerHTML = p.name;
		cell1.innerHTML = data.clubs.club(p.clubId).name2;
		cell2.innerHTML = p.positionId ? data.positions.position(p.positionId).name : '';
		cell3.innerHTML = p.squadNo;

		if ((controller.currentPlayer != null) && (row.playerId == controller.currentPlayer.playerId))
		{
			row.style.backgroundColor = "yellow";
		}

	}

	view.elements.movePlayerFirst.enable();
	view.elements.movePlayerPrevious.enable();
	view.elements.movePlayerNext.enable();
	view.elements.movePlayerLast.enable();

	view.elements.movePageFirst.enable();
	view.elements.movePagePrevious.enable();
	view.elements.movePageNext.enable();
	view.elements.movePageLast.enable();

	if (playerIndex == 0)
	{
		view.elements.movePlayerFirst.disable();
		view.elements.movePlayerPrevious.disable();
	}

	if (playerIndex == controller.filteredPlayers.count()-1)
	{
		view.elements.movePlayerNext.disable();
		view.elements.movePlayerLast.disable();
	}

	if (pagePtr == 0)
	{
		view.elements.movePageFirst.disable();
		view.elements.movePagePrevious.disable();
	}

	var lastPagePtr = Math.floor(controller.filteredPlayers.count() / 10);
	if (pagePtr == lastPagePtr)
	{
		view.elements.movePageNext.disable();
		view.elements.movePageLast.disable();
	}

}

ViewTablePlayers.prototype.movePageFirst = function () {
	var playerId = controller.filteredPlayers.first().playerId;
	view.selectPlayer(playerId);
}

ViewTablePlayers.prototype.movePagePrevious = function () {
	var pagePtr = Math.floor(data.players.index(controller.currentPlayerId) / 10);
	pagePtr --;
	var playerId = controller.filteredPlayers.items[pagePtr * 10].playerId;
	view.selectPlayer(playerId);
}

ViewTablePlayers.prototype.movePageNext = function () {
	var pagePtr = Math.floor(data.players.index(controller.currentPlayerId) / 10);
	pagePtr ++;
	var playerId = controller.filteredPlayers.items[pagePtr * 10].playerId;
	view.selectPlayer(playerId);
}

ViewTablePlayers.prototype.movePageLast = function () {
	var pagePtr = Math.floor(data.players.count() / 10);
	var playerId = controller.filteredPlayers.items[pagePtr * 10].playerId;
	view.selectPlayer(playerId);
}

ViewTablePlayers.prototype.movePlayerFirst = function () {
	var playerId = controller.filteredPlayers.first().playerId;
	view.selectPlayer(playerId);
}

ViewTablePlayers.prototype.movePlayerPrevious = function () {
	var playerId = controller.filteredPlayers.previous(controller.currentPlayer).playerId;
	view.selectPlayer(playerId);
}

ViewTablePlayers.prototype.movePlayerNext = function () {
	var playerId = controller.filteredPlayers.next(controller.currentPlayer).playerId;
	view.selectPlayer(playerId);
}

ViewTablePlayers.prototype.movePlayerLast = function () {
	var playerId = controller.filteredPlayers.last().playerId;
	view.selectPlayer(playerId);
}
