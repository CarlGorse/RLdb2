
var controller;
var data;
var viewPlayers;
var viewScores;

function Start()
{
    controller = new Controller();
    controller.initialise();
}

class Controller {

	constructor ()
	{
		data = new Data();
		viewPlayers = new ViewPlayers();
		viewScores = new ViewScores();
		
		this.currentPlayer = null;
		this.currentPlayerId = 0;
		this.filteredPlayers = new Players();

	}
	
	initialise () {
		this.currentPlayer = null;
		data.loadData();
		controller.showViewPlayers();
	}	

	setCurrentPlayer (playerId) {
		let p = data.players.item(playerId);
		this.currentPlayer = p;
		this.currentPlayerId = this.currentPlayer.playerId;
		return p;
	}		

	unsetCurrentPlayer () {
		this.currentPlayer = null;
	}	

	setFilteredPlayers () {
		this.filteredPlayers.clear();
		data.players.items.forEach (
			function(di) {
				var f = viewPlayers.elements.playerFilter;
				if (this.isPlayerFiltered(di)) {
					this.filteredPlayers.addPlayer(di);
				}
			}, this	
		)
	}

	isPlayerFiltered (di) {
		var f = viewPlayers.elements.playerFilter;
		var playerCount = viewPlayers.elements.playerFilter.playerCount(di[f.searchProperty]);
		return (playerCount > 0)
	}

	showViewPlayers() {
		document.getElementById("viewPlayers").style.display = "block";
		viewPlayers.loadDisplay();
		controller.hideViewScores();
	}

	showViewScores() {
		document.getElementById("viewScores").style.display = "block";
		viewScores.loadDisplay();
		controller.hideViewPlayers();
	}

	hideViewPlayers() {
		document.getElementById("viewPlayers").style.display = "none";
	}

	hideViewScores() {
		document.getElementById("viewScores").style.display = "none";
	}

}
