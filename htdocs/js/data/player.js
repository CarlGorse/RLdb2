
function Player(name, clubId, positionId, squadNo, image)
{
	this.playerId = data.players.nextId();
	DataItem.call(this, this.playerId, 'Player', 'name')
	
	// set defaults to ensure nothing is undefined
	this.name = name ? name : "";
	this.clubId = clubId ? clubId : "";
	this.positionId = positionId ? positionId : "";
	this.squadNo = squadNo ? squadNo : "";
	this.image = image ? image : "";

}
Player.prototype = Object.create(DataItem.prototype)
