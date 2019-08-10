
function Model()
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

}

Model.prototype.loadData = function () {
	players.load();
	clubs.load();
	positions.load();
	squadNos.load();
	hasImages.load();
}

Model.prototype.loadfile = function (dataSet) {

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "data\\" + dataSet.file, false);
	xmlhttp.send();

	var obj = JSON.parse(xmlhttp.responseText); 
	eval('load' + dataSet.type)(obj);

	thisObject.sort();
		
}

Model.prototype.loadPlayers = 	function (file) { file.clubs.forEach( 		function (o) { o.players.forEach( function(op) { filters.players.add(op.name, o.clubId, op.squadNo, op.positions, op.img); } ) } ) }
Model.prototype.loadClubs = 	function (file) { file.clubs.forEach( 		function (o) { filters.clubs.add(o.clubId, o.name, o.name2); } ) }
Model.prototype.loadPositions = function (file) { file.positions.forEach( 	function (o) { filters.positions.add(o.positionId, o.name); } ) }
Model.prototype.loadSquaddNos = function (file) { file.squadNos.forEach( 	function (o) { filters.squadNos.add(o); } ) }
Model.prototype.loadHasImages = function (file) { file.hasImages.forEach( 	function (o) { filters.hasImages.add(o); } ) }

