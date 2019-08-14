
function ViewComboBoxPlayer(filterId, element, displayProperty)
{
	ViewComboBox.call(this, filterId, data.players, element, displayProperty, 'playerId');
	this.showNonMatchingDataItems = false;
	this.showDataItemCount = false;
}
ViewComboBoxPlayer.prototype = Object.create(ViewComboBox.prototype)

ViewComboBoxPlayer.prototype.player = function () {
	return data.players.player(this.value());
}

ViewComboBoxPlayer.prototype.render = function ()
{
	ViewComboBox.prototype.render.call(this);

	count = this.element.options.length;
	//count -= 1; // exclude 'all'

	var countDescription = functions.getCountDescription(count, 'player');
	
	view.elements.filteredPlayersCount.setValue(countDescription);

}