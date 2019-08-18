
function Players()
{
	DataSet.call(this, 'Players')
}
Players.prototype = Object.create(DataSet.prototype)

Players.prototype.add =  function (name, clubId, positionId, squadNo, image) {
	playerId = this.nextId();
	p = new Player(playerId, name, clubId, positionId, squadNo, image);
	this.addPlayer(p);
	return p;
}

Players.prototype.nextId = function () {
	var result = 0;
	this.items.forEach(
		function (p)
		{
			if (p.playerId >= result) result = p.playerId + 1;
		}
	)
	return result;
}	

Players.prototype.save =  function () {
	this.writeJSON();
}

Players.prototype.player = function (id) { return this.item(id); }

Players.prototype.loadFile = function (file) { 
	file.clubs.forEach(
		function (c) { 
			c.players.forEach( 
				function(p) { 
					data.players.add(p.name, c.clubId, p.positionId, p.squadNo, p.image);
				} 
			) 
		} 
	) 
}

Players.prototype.getJSON = function ()
{
	var json = new Json();
	return json.getPlayersJSON();

}

Players.prototype.addPlayer = function (p)
{
	this.addItem(p);
}
