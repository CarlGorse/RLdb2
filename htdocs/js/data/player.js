
function Player(playerId, name, clubId, positionId, squadNo, image)
{
	DataItem.call(this, playerId, 'Player', 'name')
	
	this.playerId = playerId;
	this.name = name ? name : "";
	this.clubId = clubId ? clubId : "";
	this.positionId = positionId ? positionId : "";
	this.squadNo = squadNo ? squadNo : "";
	this.image = image ? image : "";
	
	this.hasImageId = this.image ? "Yes" : "No";

}
Player.prototype = Object.create(DataItem.prototype)
