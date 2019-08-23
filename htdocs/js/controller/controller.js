
var controller;
var data;
var view;
var functions;
	
function Controller()
{
	data = new Data();
	view = new View();
	functions = new Functions();
	
	this.currentPlayer = null;
	this.currentPlayerId = 0;
	this.filteredPlayers = new Players();

}
Controller.prototype.initialise =  function () {
	this.currentPlayer = null;
	view.loadDisplay();
}	

Controller.prototype.loadData =  function () { 
	data.loadData();
}	

Controller.prototype.setCurrentPlayer =  function (playerId) {
	p = data.players.item(playerId);
	this.currentPlayer = p;
	this.currentPlayerId = this.currentPlayer.playerId;
	return p;
}		

Controller.prototype.unsetCurrentPlayer =  function () {
	this.currentPlayer = null;
}	

Controller.prototype.addPlayer =  function (forename, surname, clubId, positionId, squadNo, image) {
	return data.players.add(forename, surname, clubId, positionId, squadNo, image);
}	

Controller.prototype.deletePlayer =  function (p) { data.players.remove(p); }		

Controller.prototype.savePlayers =  function (p) { data.players.save(p); }	

Controller.prototype.playerCountByFilter =  function (f, filterItemValue) {

	var count = 0;

	data.players.items.forEach (
		function (p)
		{

			// query player count for di, then loop through filters <> f and query each for player count by value

			var isMatch = true;

			if (filterItemValue == "none")
			{
				if (p[f.searchProperty].length > 0)
				{
					isMatch = false;
					return;
				}
			}

			if ((p[f.searchProperty] != filterItemValue) && (filterItemValue != "none")) {
				isMatch = false;
				return;
			}

			view.filters.items.forEach(
				function (f2) { 
					if (f2.elementId == f.elementId) return;
					if (f2.includeInPlayerCount == false) return;
					if (f2.value() == "none")
					{
						if (p[f2.searchProperty].length > 0)
						{
							isMatch = false;
							return;
						}
					}
					if ((f2.value() != "") && (f2.value() != "all") && (f2.value() != "none"))
					{
						if (p[f2.searchProperty] != f2.value())
						{
							isMatch = false;
							return;
						}
					}
				}, this
			)

			if (isMatch) count += 1;
		}
	)

	return count;
}	

Controller.prototype.setFilteredPlayers = function ()
{
	this.filteredPlayers.clear();
	data.players.items.forEach (
		function(di) {
			var f = view.elements.playerFilter;
			var playerCount = controller.playerCountByFilter(f, di[f.searchProperty]);
			if (playerCount > 0)
				this.filteredPlayers.addPlayer(di);
		}, this	
	)
}