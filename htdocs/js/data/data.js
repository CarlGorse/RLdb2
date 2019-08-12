
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
	
	this.dataSets = [this.players, this.clubs, this.positions, this.squadNos, this.hasImages,];

}

Data.prototype.loadData = function () {
	this.dataSets.forEach(
		function (ds) {
			ds.load();
		}
	)
	this.initialiseFilteredPlayers();
}

Data.prototype.initialiseFilteredPlayers = function () {
	this.filteredPlayers = this.players.items.slice(0);
}