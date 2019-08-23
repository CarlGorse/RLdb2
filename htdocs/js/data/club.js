
function Club(clubId, name, name2, image)
{
	DataItem.call(this, clubId, 'Club', 'name', image)
	this.clubId = clubId;
	this.name = name;
	this.name2 = name2 ? name2 : "";
	this.image = image;
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