
function ViewTable(elementId, dataSet)
{
	DocumentTable.call(this, elementId);
	this.dataSet = dataSet;
}
ViewTable.prototype = Object.create(DocumentTable.prototype)

ViewTable.prototype.render = function() {

	view.elements.playersTable.clear();

	filteredPlayerIds = new Array();
	data.players.items.forEach (
		function(di) {
			var playerCount = controller.playerCountByFilter(view.elements.playerFilter, di);
			if (playerCount > 0)
				filteredPlayerIds.push(di.playerId);
		}	
	)

	for (var x = view.pagePtr * 10; x < Math.min(((view.pagePtr + 1) * 10), filteredPlayerIds.length); x++)
	{

		var row = this.element.insertRow();
		var playerId = filteredPlayerIds[x]
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

	if (view.pagePtr == this.lastPagePtr())
	{
		view.elements.moveNext.disable();
		view.elements.moveLast.disable();
	}

}

ViewTable.prototype.moveFirst = function () {
	view.pagePtr = 0;
	view.elements.playersTable.render();
}

ViewTable.prototype.movePrevious = function () {
	view.pagePtr --;
	view.elements.playersTable.render();
}

ViewTable.prototype.moveNext = function () {
	view.pagePtr ++ ;
	view.elements.playersTable.render();
}

ViewTable.prototype.moveLast = function () {
	view.pagePtr = this.lastPagePtr();
	view.elements.playersTable.render();
}

ViewTable.prototype.lastPagePtr = function () {
	return Math.floor(view.elements.playersTable.dataSet.count() / 10) - 1;
}

