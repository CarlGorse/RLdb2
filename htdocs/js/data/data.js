
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

Data.prototype.loadPlayers = 	function (file) { file.clubs.forEach( 		function (c) { c.players.forEach( function(p) { data.players.add(p.id, p.name, c.clubId, p.squadNo, p.positions, p.img); } ) } ) }
Data.prototype.loadClubs = 	function (file) { file.clubs.forEach( 		function (c) { data.clubs.add(c.clubId, c.name, c.name2); } ) }
Data.prototype.loadPositions = function (file) { file.positions.forEach( 	function (pn) { data.positions.add(pn.positionId, pn.name); } ) }
Data.prototype.loadSquadNos = function (file) { file.squadNos.forEach( 	function (sn) { data.squadNos.add(sn, sn); } ) }
Data.prototype.loadHasImages = function (file) { file.hasImages.forEach( 	function (hi) { data.hasImages.add(hi, hi); } ) }

Data.prototype.getClubById = function (clubId) { return filters.clubs.getClubById(clubId); }
Data.prototype.getPositionById = function (positionId) { return filters.positions.getPositionById(positionId); }
Data.prototype.getClubFilterName = function () { return filters.getClubById(this.clubFilter.value()).name; }
Data.prototype.getPositionFilterName = function () { return filters.getPositionById(this.positionFilter.value()).name; }
Data.prototype.getSquadNoFilterSquadNo = function () { return filters.squadNoFilter.value(); }
Data.prototype.getHasImagesFilterText = function () { return filters.hasImageFilter.value(); }
