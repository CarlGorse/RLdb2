
function Player(name, clubId, positions, squadNo, image)
{
	this.playerId = data.players.nextId();
	DataItem.call(this, this.playerId, 'Player', 'name')
	this.name = name;
	this.clubId = clubId;
	this.positions = positions;
	this.squadNo = squadNo;
	this.image - image;
}
Player.prototype = Object.create(DataItem.prototype)
