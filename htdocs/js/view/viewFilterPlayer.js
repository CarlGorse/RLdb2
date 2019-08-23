
function ViewFilterPlayer(elementId, displayProperty)
{
	ViewFilterSelect.call(this, elementId, data.players, displayProperty, 'playerId');
	this.showNonMatchingDataItems = false;
	this.showDataItemCount = false;
	this.showOptionAll = false;
	this.showOptionNone = false;
	this.setInitialValueEmpty = true;
	this.includeInPlayerCount = false;

	this.element.onchange = function() { view.events.selectPlayerBySelect(); }

}
ViewFilterPlayer.prototype = Object.create(ViewFilterSelect.prototype)

ViewFilterPlayer.prototype.player = function () {
	return data.players.player(this.value());
}

ViewFilterPlayer.prototype.render = function ()
{
	ViewFilterSelect.prototype.render.call(this);

	count = this.element.options.length;

	var countDescription = functions.getCountDescription(count, 'player');
	
	view.elements.filteredPlayersCount.setValue(countDescription);

}

ViewFilterPlayer.prototype.select = function (playerId)
{
	controller.setCurrentPlayer(playerId);
	ViewFilterSelect.prototype.select.call(this, playerId);
	view.elements.playersTable.render();
}

ViewFilterPlayer.prototype.deselect = function ()
{
	controller.unsetCurrentPlayer();
	this.clearValue();
}