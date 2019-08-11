
function Club(id, name)
{
	DataItem.call(this, id, 'Club', 'name')
	this.name = name;
}
Club.prototype = Object.create(DataItem.prototype)

Club.prototype.clubPlayers =  function () {
	result = new Players();
	data.players.items.forEach(
		function (p) {
			if (p.clubId == this.id)
			{
				result.add(p);
			}
		}, this
	)
	return result;
}