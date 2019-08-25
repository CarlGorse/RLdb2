
class Club extends DataItem {

	constructor (clubId, name, name2, image)
	{
		super (clubId, 'Club', 'name', image);
		this.clubId = clubId;
		this.name = name;
		this.name2 = name2 ? name2 : "";
		this.image = image;
	}

	clubPlayers () {
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

}