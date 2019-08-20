
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
	this.filteredPlayerIds = new Array();

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
	return p;
}		

Controller.prototype.addPlayer =  function (name, clubId, positionId, squadNo, image) {
	return data.players.add(name, clubId, positionId, squadNo, image);
}	

Controller.prototype.deletePlayer =  function (p) { data.players.remove(p); }		

Controller.prototype.savePlayers =  function (p) { data.players.save(p); }	

Controller.prototype.playerCountByFilter =  function (f, di) {

	var count = 0;

	data.players.items.forEach (
		function (p)
		{

			// query player count for di, then loop through filters <> f and query each for player count by value

			var isMatch = true;

			if (p[f.searchProperty] != di[f.searchProperty]) {
				isMatch = false;
				return;
			}

			view.filters.items.forEach(
				function (f2) { 
					if (f2.includeInPlayerCount == false) return;
					if (f2.filterId == f.filterId) return;
					if ((f2.value() != "") && (f2.value() != "all"))
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
	functions.Array.clear(this.filteredPlayerIds);
	data.players.items.forEach (
		function(di) {
			var playerCount = controller.playerCountByFilter(view.elements.playerFilter, di);
			if (playerCount > 0)
				this.filteredPlayerIds.push(di.playerId);
		}, this	
	)
}