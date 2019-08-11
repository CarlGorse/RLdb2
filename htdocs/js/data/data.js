
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

	this.dataSets = [this.players, this.clubs, this.positions, this.squadNos, this.hasImages];

}

Data.prototype.loadData = function () {
	this.dataSets.forEach(
		function (ds) {
			ds.load();
		}
	)
}

