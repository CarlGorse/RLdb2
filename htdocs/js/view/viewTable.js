
function ViewTable(elementId)
{
    DocumentTable.call(this, elementId);
}
ViewTable.prototype = Object.create(DocumentTable.prototype)

ViewTable.prototype.render = function() {
    view.elements.playersTable.clear();
	view.elements.playerFilter.dataSet.items.forEach(
		function (di) {

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

		}, this
	)
}
