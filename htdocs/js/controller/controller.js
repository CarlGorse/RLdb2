
var data;
var view;

function Controller()
{
	data = new Data();
	view = new View();
	
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
