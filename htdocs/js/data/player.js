
class Player extends DataItem {

	constructor (playerId, forename, surname, clubId, positionId, squadNo, image)
	{
		super ( playerId, 'Player', 'name');
		
		this.playerId = playerId;
		this.forename = forename ? forename.trim() : "";
		this.surname = surname ? surname.trim() : "";
		this.clubId = clubId ? clubId : "";
		this.positionId = positionId ? positionId : "";
		this.squadNo = squadNo ? squadNo : "";
		this.image = image ? image.trim() : "";
		
		this.hasImageId = this.image ? "Yes" : "No";

	}

	get name () {
		return this.surname + ', ' + this.forename;
	}
}
