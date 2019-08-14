
function ViewFilterPlayer(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.players, element, displayProperty, 'playerId');
	this.showNonMatchingDataItems = false;
}
ViewFilterPlayer.prototype = Object.create(ViewFilterComboBox.prototype)

ViewFilterPlayer.prototype.player = function () {
	return data.players.player(this.value());
}

ViewFilterPlayer.prototype.render = function ()
{
	ViewFilterComboBox.prototype.render.call(this);

	count = this.element.options.length;
	count -= 1; // exclude 'all'

	var countDescription = functions.getCountDescription(count, 'player');
	
	view.elements.filteredPlayersCount.setValue(countDescription);

}