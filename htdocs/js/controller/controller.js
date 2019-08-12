
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

Controller.prototype.playerCountByFilter =  function (f, i) {

	// loop through filters <> f and query each for player count by value, then query player count for i

	return 0;
}	
