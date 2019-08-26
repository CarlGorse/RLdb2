
class ViewPlayersSearchFilterPlayer extends ViewPlayersSearchFilter {

	constructor (parameters)
	{
		parameters.dataSet = data.players;
		parameters.includeInPlayerCount = false;
		parameters.searchProperty = 'playerId';
		parameters.showOptionAll = false;
		parameters.showOptionNone = false;
		parameters.showPlayerCount = false;
		super (parameters);
		
		this.element.onchange = function() { viewPlayers.events.selectPlayerBySelect(); }

	}

	player () {
		return data.players.player(this.value);
	}

	render() {

		ViewPlayersSearchFilter.prototype.render.call(this);

		let count = this.element.options.length;
		var countDescription = Functions.getCountDescription(count, 'player');
		viewPlayers.elements.filteredPlayersCount.setValue(countDescription);

	}

	select (playerId) {
		controller.setCurrentPlayer(playerId);
		ViewPlayersSearchFilter.prototype.select.call(this, playerId);
		viewPlayers.elements.playersTable.render();
	}

	deselect () {
		controller.unsetCurrentPlayer();
		this.clearValue();
	}

}