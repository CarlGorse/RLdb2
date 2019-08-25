
class Data {

	constructor ()
	{

		this.players = 			new Players('players.json');
		this.clubs = 			new Clubs('clubs.json');
		this.positions = 		new Positions('positions.json');
		this.squadNos = 		new SquadNos('squadNos.json');
		this.hasImages = 		new HasImages('hasImages.json');

		this.dataSets = [this.players, this.clubs, this.positions, this.squadNos, this.hasImages,];

	}

	loadData () {
		this.dataSets.forEach(
			function (ds) {
				ds.clear();
				ds.load();
			}
		)
	}

}