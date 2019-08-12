
var data;
var view;
var functions;

function Controller()
{
	data = new Data();
	view = new View();
	functions = new Functions();
	
	this.currentPlayer = null;
	
}

Controller.prototype.initialise =  function () { view.loadDisplay(); }
Controller.prototype.loadData =  function () { data.loadData(); }	

Controller.prototype.setCurrentPlayer =  function (p) {
	this.currentPlayer = p;
}		

Controller.prototype.addPlayer =  function (name, clubId, positionId, squadNo, image) {
	return data.players.add(name, clubId, positionId, squadNo, image);
}	

Controller.prototype.deletePlayer =  function (p) { data.players.remove(p); }		

Controller.prototype.savePlayers =  function (p) { data.players.save(p); }	

Controller.prototype.playerCountByFilter =  function (f, fi) {

	var count = 0;

	data.players.items.forEach (
		function (p)
		{

			// query player count for i, then loop through filters <> f and query each for player count by value

			var isMatch = true;

			if (p[f.searchProperty] != fi[f.searchProperty]) {
				isMatch = false;
				return;
			}

			view.searchFilters.items.forEach(
				function (f2) { 
					if (f2.filterId == f.filterId) return;
					if (f2.value() != "")
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
