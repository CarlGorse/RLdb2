
class Players extends DataSet {

	constructor (filename)
	{
		super ('Players', filename);
	}

	add (forename, surname, clubId, positionId, squadNo, image) {
		let playerId = this.nextId;
		let p = new Player(playerId, forename, surname, clubId, positionId, squadNo, image);
		this.addPlayer(p);
		return p;
	}

	get nextId () {
		var result = 0;
		this.items.forEach(
			function (p)
			{
				if (p.playerId >= result) result = p.playerId + 1;
			}
		)
		return result;
	}	

	save () {
		this.writeJson();
	}

	player (id) { return this.item(id); }

	loadFile (file) { 
		file.clubs.forEach(
			function (c) { 
				c.players.forEach( 
					function(p) { 
						p = data.players.add(p.forename, p.surname, c.clubId, p.positionId, p.squadNo, p.image);
					} 
				) 
			} 
		) 
	}

	getJson ()
	{
		var json = new Json();
		return json.getPlayersJson();
	}

	addPlayer (p)
	{
		this.addItem(p);
	}

	clear (p)
	{
		this.items.clear();
	}

}