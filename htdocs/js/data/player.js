
function Player(playerId, forename, surname, clubId, positionId, squadNo, image)
{
	DataItem.call(this, playerId, 'Player', 'name')
	
	this.playerId = playerId;
	this.forename = forename ? forename.trim() : "";
	this.surname = surname ? surname.trim() : "";
	this.name = this.surname + ', ' + this.forename;
	this.clubId = clubId ? clubId : "";
	this.positionId = positionId ? positionId : "";
	this.squadNo = squadNo ? squadNo : "";
	this.image = image ? image.trim() : "";
	
	this.hasImageId = this.image ? "Yes" : "No";

}
Player.prototype = Object.create(DataItem.prototype)
