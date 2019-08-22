
function Player(playerId, forename, surname, clubId, positionId, squadNo, image)
{
	DataItem.call(this, playerId, 'Player', 'name')
	
	this.playerId = playerId;
	this.forename = forename ? forename : "";
	this.surname = surname ? surname : "";
	this.name = this.forename + ' ' + this.surname;
	this.clubId = clubId ? clubId : "";
	this.positionId = positionId ? positionId : "";
	this.squadNo = squadNo ? squadNo : "";
	this.image = image ? image : "";
	
	this.hasImageId = this.image ? "Yes" : "No";

}
Player.prototype = Object.create(DataItem.prototype)
