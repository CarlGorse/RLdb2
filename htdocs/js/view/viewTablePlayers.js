
function ViewTablePlayers(elementId, dataSet)
{
	DocumentTable.call(this, elementId);
	this.dataSet = dataSet;
	this.filteredPlayerIds = new Array();
}
ViewTablePlayers.prototype = Object.create(DocumentTable.prototype)

ViewTablePlayers.prototype.render = function() {

	view.elements.playersTable.clear();

	functions.Array.clear(this.filteredPlayerIds);
	data.players.items.forEach (
		function(di) {
			var playerCount = controller.playerCountByFilter(view.elements.playerFilter, di);
			if (playerCount > 0)
				this.filteredPlayerIds.push(di.playerId);
		}, this	
	)

	var lastPagePtr = Math.floor((this.filteredPlayerIds.length + 9) / 10) - 1;
	if (view.pagePtr == -1) view.pagePtr = lastPagePtr;

	for (var x = 0; x < 10; x ++)
	{
		var playerPtr = x + (view.pagePtr * 10);	
		if (playerPtr >= this.filteredPlayerIds.length) break;

		var row = this.element.insertRow();
		var playerId = this.filteredPlayerIds[playerPtr]
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

	}

	view.elements.moveFirst.enable();
	view.elements.movePrevious.enable();
	view.elements.moveNext.enable();
	view.elements.moveLast.enable();

	if (view.pagePtr == 0)
	{
		view.elements.moveFirst.disable();
		view.elements.movePrevious.disable();
	}

	if (view.pagePtr == lastPagePtr)
	{
		view.elements.moveNext.disable();
		view.elements.moveLast.disable();
	}

}

ViewTablePlayers.prototype.moveFirst = function () {
	view.pagePtr = 0;
	view.elements.playersTable.render();
}

ViewTablePlayers.prototype.movePrevious = function () {
	view.pagePtr --;
	view.elements.playersTable.render();
}

ViewTablePlayers.prototype.moveNext = function () {
	view.pagePtr ++ ;
	view.elements.playersTable.render();
}

ViewTablePlayers.prototype.moveLast = function () {
	view.pagePtr = -1;
	view.elements.playersTable.render();
}

ViewTablePlayers.prototype.lastPagePtr = function () {
	return Math.floor(view.elements.playersTable.dataSet.count() / 10) - 1;
}

