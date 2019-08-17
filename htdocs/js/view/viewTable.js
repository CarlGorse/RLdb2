
function ViewTable(elementId, dataSet)
{
	DocumentTable.call(this, elementId);
	this.dataSet = dataSet;
}
ViewTable.prototype = Object.create(DocumentTable.prototype)

ViewTable.prototype.render = function() {

	view.elements.playersTable.clear();

	for (var playerPtr = view.pagePtr * 10; playerPtr < Math.min((view.pagePtr + 1) * 10, view.elements.playerFilter.dataSet.count()); playerPtr ++)
	{

		var di = view.elements.playerFilter.dataSet.items[playerPtr];

		var playerCount = controller.playerCountByFilter(view.elements.playerFilter, di);
		if (playerCount > 0)
		{
			var row = this.element.insertRow();
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);
			var cell3 = row.insertCell(3);
			cell0.innerHTML = di.name;
			cell1.innerHTML = data.clubs.club(di.clubId).name2
			cell2.innerHTML = di.positionId ? data.positions.position(di.positionId).name : '';
			cell3.innerHTML = di.squadNo;
		}

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

