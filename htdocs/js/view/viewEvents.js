
function ViewEvents() {}

ViewEvents.prototype.changeFilter = function (filter) {	
    view.allComboBoxes.render(); 
}
ViewEvents.prototype.selectPlayer = function (filter) {	view.selectPlayer(); }
ViewEvents.prototype.addPlayer = function (filter) {view.addPlayer(); }
ViewEvents.prototype.editPlayer = function (filter) {view.editPlayer(); }
ViewEvents.prototype.deletePlayer = function (filter) {view.deletePlayer(); }
ViewEvents.prototype.savePlayer = function (filter) {view.savePlayer(); }