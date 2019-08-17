
function ViewEvents() {}

ViewEvents.prototype.changeFilter = function (filter) {	
    view.pagePtr = 0;
    view.filters.render(); 
}

ViewEvents.prototype.initialise = function () {	

    ViewEvents.prototype.selectPlayerBySelect = function () {	
        playerId = view.elements.playerFilter.player().playerId;
        view.selectPlayer(playerId); 
    }

    ViewEvents.prototype.selectPlayerByTable = function (row) {	
        view.selectPlayer(row.playerId); 
    }

    ViewEvents.prototype.addPlayer = function (filter) {view.addPlayer(); }
    ViewEvents.prototype.editPlayer = function (filter) {view.editPlayer(); }
    ViewEvents.prototype.deletePlayer = function (filter) {view.deletePlayer(); }
    ViewEvents.prototype.savePlayer = function (filter) {view.savePlayer(); }

    ViewEvents.prototype.moveFirst = function () {view.elements.playersTable.moveFirst(); }
    ViewEvents.prototype.movePrevious = function () {view.elements.playersTable.movePrevious(); }
    ViewEvents.prototype.moveNext = function () {view.elements.playersTable.moveNext(); }
    ViewEvents.prototype.moveLast = function () {view.elements.playersTable.moveLast(); }

}


