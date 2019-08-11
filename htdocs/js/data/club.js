
function Club(clubId, name, name2)
{
	DataItem.call(this, clubId, 'Club', 'name')
	this.clubId = clubId;
	this.name = name;
	this.name2 = name2 ? name2 : "";
}
Club.prototype = Object.create(DataItem.prototype)

Club.prototype.clubPlayers =  function () {
	var players = new Players();
	data.players.items.forEach(
		function (p) {
			if (p.clubId == this.clubId)
			{
				players.addPlayer(p);
			}
		}, this
	)
	return players;
}