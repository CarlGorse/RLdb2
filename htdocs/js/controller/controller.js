
var data;
var view;

function Controller()
{
	data = new Data();
	view = new View();

	this.currentPlayer = null;

}

Controller.prototype.initialise =  function () {
	view.loadDisplay();
}

Controller.prototype.loadData =  function () {
	data.loadData();
}	

Controller.prototype.setCurrentPlayer =  function (p) {
	this.currentPlayer = p;
}		

Controller.prototype.addPlayer =  function (name, clubId, positionId, squadNo, image) {
	return data.players.add(name, clubId, positionId, squadNo, image);
}	

Controller.prototype.deletePlayer =  function (p) {
	data.players.remove(p);
}		

Controller.prototype.savePlayers =  function (p) {
	data.players.save(p);
}	

Controller.prototype.isPlayerMatchObject =  function (p, clubId, positionId, squadNo, hasImage) {
		
	if (filters.isPlayerMatchClub(p, clubId) 			== false) return false;
	if (filters.isPlayerMatchPosition(p, positionId) 	== false) return false;
	if (filters.isPlayerMatchSquadNo(p, squadNo) 		== false) return false;
	if (filters.isPlayerMatchHasImage(p, hasImage) 		== false) return false;
		
	return filters.isPlayerMatchAllFilters(p);
	
}	
	
Controller.prototype.getPlayerCount =  function (club, position, squadNo, hasImage) {

	var count = 0;
	filters.players.items.forEach(
		function (p)
		{
			if (isPlayerMatchObject(p, club, position, squadNo, hasImage) == false)
				return;
			count += 1;
		}
	)
	return count;	

}

Controller.prototype.isPlayerMatchClub =  function (p, clubId) {
	
	if (clubId && !(["all", "xx", p.club].includes(clubId))) return false;

	if (clubId == "xx")
	{
		if (p.club)
		{
			var match = false;
			filters.clubs.items.forEach(
				function (c)
				{
					if (c.clubId == p.club)
					{
						match = true;
					}
				}
			)
			if (!match) return true; 
		}
		return false;
	}

	return true;

}

Controller.prototype.isPlayerMatchPosition =  function (p, positionId) {

	if (positionId && !(["all", "xx", "none", "multiple"].includes(positionId)))
	{
		var match = false;
		if (p.position && p.position == positionId)
			match = true;;
		if (match == false) return false;
	}

	if (positionId == "xx")
	{
		if (p.position)
		{
			var match = false;
			filters.positions.items.forEach (
				function (pn)
				{
					if (p1.positionId == p.positionId)
					{
						match = true;
					}
				}
			)
			if (!match) return true;
		}
		return false;
	}

	if (positionId == "none" && p.position && p.position.length > 0) return false;
	if (positionId == "multiple" && p.position && p.position.length > 1) return true;
	if (positionId == "multiple" && !p.position) return false;
	if (positionId == "multiple" && p.position && p.position.length <= 1) return false;

	return true;

}

Controller.prototype.isPlayerMatchClub =  function (p, squadNo) {
	
	if (squadNo && squadNo != "all" && squadNo != "xx" && squadNo != "none" && p.squadNo != squadNo) return false;

	if (squadNo == "xx")
	{
		if (p.squadNo)
		{
			var match = false;
			filters.squadNos.items.forEach(
				function(sn)
				{
					if (sn.squadNo == p.squadNo)
					{
						match = true;
					}
				}
			)
			if (!match) return true; 
		}
		return false;
	}
		
	if (squadNo == "none" && p.squadNo && p.squadNo.length > 0)	return false;

	return true;

}

Controller.prototype.isPlayerMatchClub =  function (p, hasImage) {

	if (hasImage && hasImage != "all")
	{
		if (!p.img && hasImage == "Yes") return false; 
		if (p.img && hasImage == "No") return false; 
	}

	return true;

}

Controller.prototype.getClubFilterName = function () { return data.getClubById(this.clubFilter.value()).name; }
Controller.prototype.getPositionFilterName = function () { return data.getPositionById(this.positionFilter.value()).name; }
Controller.prototype.getSquadNoFilterSquadNo = function () { return data.squadNoFilter.value(); }
Controller.prototype.getHasImagesFilterText = function () { return filters.hasImageFilter.value(); }

