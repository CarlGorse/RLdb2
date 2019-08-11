
function ViewFilterPlayer(filterId, element, displayProperty)
{
	ViewFilterComboBox.call(this, filterId, data.players, element, displayProperty);
}
ViewFilterPlayer.prototype = Object.create(ViewFilterComboBox.prototype)

ViewFilterPlayer.prototype.player = function () {
	return data.players.player(this.value());
}