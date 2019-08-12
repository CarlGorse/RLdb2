
function ViewFilterPlayer(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.players, element, displayProperty, 'playerId');
}
ViewFilterPlayer.prototype = Object.create(ViewFilterComboBox.prototype)

ViewFilterPlayer.prototype.player = function () {
	return data.players.player(this.value());
}