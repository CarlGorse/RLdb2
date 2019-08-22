
function ViewTablePlayers(elementId, dataSet)
{
	DocumentTable.call(this, elementId);
	this.dataSet = dataSet;
	this.pagePtr = 0;
	this.pageCount = 0;
	this.memberPageCount = 15;
}
ViewTablePlayers.prototype = Object.create(DocumentTable.prototype)

ViewTablePlayers.prototype.render = function() {

	controller.setFilteredPlayers();
	this.pageCount = Math.floor(controller.filteredPlayers.count() / this.memberPageCount) + 1;

	var playerIndex = -1;
	if (controller.currentPlayer != null)
	{
		playerIndex = controller.filteredPlayers.index(controller.currentPlayer.playerId);
		this.pagePtr = Math.floor(playerIndex / this.memberPageCount);
	}

	view.elements.pageCount.setValue('Page' + ' ' + (this.pagePtr + 1) + ' of ' + this.pageCount);

	view.elements.playersTable.clear();
	for (var x = 0; x < this.memberPageCount; x ++)
	{
		var playerPtr = x + (this.pagePtr * this.memberPageCount);	
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

	this.setButtons(playerIndex);	

}

ViewTablePlayers.prototype.setButtons = function (playerIndex) {
	
	view.elements.movePlayerFirst.enable();
	view.elements.movePlayerPrevious.enable();
	view.elements.movePlayerNext.enable();
	view.elements.movePlayerLast.enable();

	view.elements.movePageFirst.enable();
	view.elements.movePagePrevious.enable();
	view.elements.movePageNext.enable();
	view.elements.movePageLast.enable();

	if ((playerIndex == 0) || (playerIndex == -1))
	{
		view.elements.movePlayerFirst.disable();
		view.elements.movePlayerPrevious.disable();
	}

	if ((playerIndex == controller.filteredPlayers.count()-1))
	{
		view.elements.movePlayerLast.disable();
	}

	if ((playerIndex == controller.filteredPlayers.count()-1))
	{
		view.elements.movePlayerNext.disable();
	}

	if (controller.filteredPlayers.count() < this.memberPageCount)
	{
		view.elements.movePageLast.disable();
	}

	if (this.pagePtr == 0)
	{
		view.elements.movePageFirst.disable();
		view.elements.movePagePrevious.disable();
	}

	var lastPagePtr = Math.floor(controller.filteredPlayers.count() / this.memberPageCount);
	if (this.pagePtr == lastPagePtr)
	{
		view.elements.movePageNext.disable();
		view.elements.movePageLast.disable();
	}

}

ViewTablePlayers.prototype.movePageFirst = function () {
	this.movePage(0);
}

ViewTablePlayers.prototype.movePagePrevious = function () {
	this.movePage(this.pagePtr - 1);
}

ViewTablePlayers.prototype.movePageNext = function () {
	this.movePage(this.pagePtr + 1);
}

ViewTablePlayers.prototype.movePageLast = function () {
	var pagePtr = Math.floor(controller.filteredPlayers.count() / this.memberPageCount);
	this.movePage(pagePtr);
}

ViewTablePlayers.prototype.movePage = function (pagePtr)
{
	view.deselectPlayer();
	this.pagePtr = pagePtr;
	this.render();
}

ViewTablePlayers.prototype.movePlayerFirst = function () {
	var playerId = 0
	if (controller.currentPlayer == null)
		playerId = controller.filteredOlayers.last().playerId;
	else
	playerId = controller.filteredPlayers.first().playerId;
	view.selectPlayer(playerId);
}

ViewTablePlayers.prototype.movePlayerPrevious = function () {
	var playerId = controller.filteredPlayers.previous(controller.currentPlayer).playerId;
	view.selectPlayer(playerId);
}

ViewTablePlayers.prototype.movePlayerNext = function () {
	var playerId = 0
	if (controller.currentPlayer == null)
		playerId = controller.filteredPlayers.first().playerId;
	else
		playerId = controller.filteredPlayers.next(controller.currentPlayer).playerId;
	view.selectPlayer(playerId);
}

ViewTablePlayers.prototype.movePlayerLast = function () {
	var playerId = controller.filteredPlayers.last().playerId;
	view.selectPlayer(playerId);
}
