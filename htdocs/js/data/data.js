
function Data()
{

	this.players = 			new Players();
	this.clubs = 			new Clubs();
	this.positions = 		new Positions();
	this.squadNos = 		new SquadNos();
	this.hasImages = 		new HasImages();

	this.players.fileName = 	'players.json';
	this.clubs.fileName = 		'clubs.json';
	this.positions.fileName = 	'positions.json';
	this.squadNos.fileName = 	'squadNos.json';
	this.hasImages.fileName = 	'hasImages.json';
	
	function getPlayerCountByClub(o) 		{ return getPlayerCount(o, null, null, null); }
	function getPlayerCountByPosition(o) 	{ return getPlayerCount(null, o, null, null); }
	function getPlayerCountBySquadNo(o) 	{ return getPlayerCount(null, null, o, null); }
	function getPlayerCountByHasImage(o) 	{ return getPlayerCount(null, null, null, o); }

}

Data.prototype.loadData = function () {
	this.players.load();
	this.clubs.load();
	this.positions.load();
	this.squadNos.load();
	this.hasImages.load();
}

Data.prototype.loadFile = function (dataSet) {

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "files\\" + dataSet.fileName, false);
	xmlhttp.send();

	var obj = JSON.parse(xmlhttp.responseText); 
	eval('data.load' + dataSet.typeName)(obj);

	dataSet.sort();
		
}

Data.prototype.loadPlayers = function (file) { 
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
Data.prototype.loadClubs = 	function (file) { file.clubs.forEach( 		function (c) { data.clubs.add(c.clubId, c.name, c.name2); } ) }
Data.prototype.loadPositions = function (file) { file.positions.forEach( 	function (pn) { data.positions.add(pn.positionId, pn.name); } ) }
Data.prototype.loadSquadNos = function (file) { file.squadNos.forEach( 	function (sn) { data.squadNos.add(sn, sn); } ) }
Data.prototype.loadHasImages = function (file) { file.hasImages.forEach( 	function (hi) { data.hasImages.add(hi, hi); } ) }


Data.prototype.getPlayerById = function (id) { 
	var result = null;
	this.players.items.forEach( 
		function (p) { 
			if (p.id.toString() == id)
					result = p; } 
	) 
	return result;
}

Data.prototype.getClubById = function (id) { 
	var result = null;
	this.clubs.items.forEach( 
		function (c) { 
			if (c.id.toString() == id)
					result = c; } 
	) 
	return result;
}

Data.prototype.getPositionById = function (id) {
	var result = null;
	this.positions.items.forEach( 
		function (pn) { 
			if (pn.id.toString() == id)
					result = pn; } 
	) 
	return result;
}

Data.prototype.getPositionsTextByIds = function (ids) {
	var result = "";
	ids.forEach(
		function (id) {
			data.positions.items.forEach( 
				function (pn) { 
					if (pn.id.toString() == id)
						result += pn.name; } 
			) 
		}
	)

	return result;
}