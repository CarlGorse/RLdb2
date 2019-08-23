
function ViewEvents() {}

ViewEvents.prototype.changeFilter = function (filter) {	
    //pagePtr = 0;
    view.filters.render(); 
    view.elements.playersTable.movePageFirst();
}

ViewEvents.prototype.initialise = function () {	

    ViewEvents.prototype.selectPlayerBySelect = function () {	
        playerId = view.elements.playerFilter.player().playerId;
        view.selectPlayer(playerId); 
    }

    ViewEvents.prototype.selectPlayerByTable = function (row) {	
        view.selectPlayer(row.playerId); 
    }

    ViewEvents.prototype.addPlayer = function (filter) {    view.addPlayer(); }
    ViewEvents.prototype.editPlayer = function (filter) {   view.editPlayer(); }
    ViewEvents.prototype.deletePlayer = function (filter) { view.deletePlayer(); }
    ViewEvents.prototype.savePlayer = function (filter) {   view.savePlayer(); }

    ViewEvents.prototype.movePageFirst = function () {      view.elements.playersTable.movePageFirst(); }
    ViewEvents.prototype.movePagePrevious = function () {   view.elements.playersTable.movePagePrevious(); }
    ViewEvents.prototype.movePageNext = function () {       view.elements.playersTable.movePageNext(); }
    ViewEvents.prototype.movePageLast = function () {       view.elements.playersTable.movePageLast(); }

    ViewEvents.prototype.movePlayerFirst = function () {    view.elements.playersTable.movePlayerFirst(); }
    ViewEvents.prototype.movePlayerPrevious = function () { view.elements.playersTable.movePlayerPrevious(); }
    ViewEvents.prototype.movePlayerNext = function () {     view.elements.playersTable.movePlayerNext(); }
    ViewEvents.prototype.movePlayerLast = function () {     view.elements.playersTable.movePlayerLast(); }

}


