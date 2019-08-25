
class ViewEvents {

    changeFilter (filter) {	
        //pagePtr = 0;
        viewPlayers.filters.render(); 
        viewPlayers.elements.playersTable.movePageFirst();
    }

    initialise () {	

        ViewEvents.prototype.selectPlayerBySelect = function () {	
            let playerId = viewPlayers.elements.playerFilter.player().playerId;
            viewPlayers.selectPlayer(playerId); 
        }

        ViewEvents.prototype.selectPlayerByTable = function (row) {	
            viewPlayers.selectPlayer(row.playerId); 
        }

        ViewEvents.prototype.addPlayer = function (filter) {    viewPlayers.addPlayer(); }
        ViewEvents.prototype.editPlayer = function (filter) {   viewPlayers.editPlayer(); }
        ViewEvents.prototype.deletePlayer = function (filter) { viewPlayers.deletePlayer(); }
        ViewEvents.prototype.savePlayer = function (filter) {   viewPlayers.savePlayer(); }

        ViewEvents.prototype.movePageFirst = function () {      viewPlayers.elements.playersTable.movePageFirst(); }
        ViewEvents.prototype.movePagePrevious = function () {   viewPlayers.elements.playersTable.movePagePrevious(); }
        ViewEvents.prototype.movePageNext = function () {       viewPlayers.elements.playersTable.movePageNext(); }
        ViewEvents.prototype.movePageLast = function () {       viewPlayers.elements.playersTable.movePageLast(); }

        ViewEvents.prototype.movePlayerFirst = function () {    viewPlayers.elements.playersTable.movePlayerFirst(); }
        ViewEvents.prototype.movePlayerPrevious = function () { viewPlayers.elements.playersTable.movePlayerPrevious(); }
        ViewEvents.prototype.movePlayerNext = function () {     viewPlayers.elements.playersTable.movePlayerNext(); }
        ViewEvents.prototype.movePlayerLast = function () {     viewPlayers.elements.playersTable.movePlayerLast(); }

    }

}