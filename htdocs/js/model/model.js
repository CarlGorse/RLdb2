
function data()
{

	this.players = 			new Players();
	this.clubs = 			new Clubs();
	this.positions = 		new Positions();
	this.squadNos = 		new SquadNos();
	this.hasImages = 		new HasImages();

	Filters.prototype.getClubById = function (clubId) { return filters.clubs.getClubById(clubId); }
	Filters.prototype.getPositionById = function (positionId) { return filters.positions.getPositionById(positionId); }
	Filters.prototype.getClubFilterName = function () { return filters.getClubById(this.clubFilter.value()).name; }
	Filters.prototype.getPositionFilterName = function () { return filters.getPositionById(this.positionFilter.value()).name; }
	Filters.prototype.getSquadNoFilterSquadNo = function () { return filters.squadNoFilter.value(); }
	Filters.prototype.getHasImagesFilterText = function () { return filters.hasImageFilter.value(); }
	
	function getPlayerCountByClub(o) 		{ return getPlayerCount(o, null, null, null); }
	function getPlayerCountByPosition(o) 	{ return getPlayerCount(null, o, null, null); }
	function getPlayerCountBySquadNo(o) 	{ return getPlayerCount(null, null, o, null); }
	function getPlayerCountByHasImage(o) 	{ return getPlayerCount(null, null, null, o); }

	function getPlayerCount(club, position, squadNo, hasImage)
	{
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

	function isPlayerMatchObject(p, clubId, positionId, squadNo, hasImage)
	{

		if (filters.isPlayerMatchClub(p, clubId) == false) return false;
		if (filters.isPlayerMatchPosition(p, positionId) == false) return false;
		if (filters.isPlayerMatchSquadNo(p, squadNo) == false) return false;
		if (filters.isPlayerMatchHasImage(p, hasImage) == false) return false;
		
		return filters.isPlayerMatchAllFilters(p);

	}

	Filters.prototype.isPlayerMatchClub = function (p, clubId)
	{
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

	Filters.prototype.isPlayerMatchPosition = function (p, positionId)
	{

		if (positionId && !(["all", "xx", "none", "multiple"].includes(positionId)))
		{
			var match = false;
			if (p.positions && p.positions.includes(positionId) == true)
				match = true;;
			if (match == false) return false;
		}

		if (positionId == "xx")
		{
			if (p.positions)
			{
				p.positions.forEach(
					function(pn2)
					{
						var match = false;
						filters.positions.items.forEach(
							function (pn1)
							{
								if (pn1.positionId == pn2)
								{
									match = true;
								}
							}
						)
						if (!match) return true;
					}
				)
			}
			return false;
		}

		if (positionId == "none" && p.positions && p.positions.length > 0) return false;
		if (positionId == "multiple" && p.positions && p.positions.length > 1) return true;
		if (positionId == "multiple" && !p.positions) return false;
		if (positionId == "multiple" && p.positions && p.positions.length <= 1) return false;

		return true;

	}

	Filters.prototype.isPlayerMatchSquadNo = function (p, squadNo)
	{

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

	Filters.prototype.isPlayerMatchHasImage = function (p, hasImage)
	{

		if (hasImage && hasImage != "all")
		{
			if (!p.img && hasImage == "Yes") return false; 
			if (p.img && hasImage == "No") return false; 
		}

		return true;

	}
	

}