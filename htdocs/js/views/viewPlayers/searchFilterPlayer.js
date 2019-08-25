
class ViewSearchFilterPlayer extends ViewSearchFilter {

	constructor (elementId, displayProperty)
	{
		super (elementId, data.players, displayProperty, 'playerId');
		this.showNonMatchingDataItems = false;
		this.showDataItemCount = false;
		this.showOptionAll = false;
		this.showOptionNone = false;
		this.setInitialValueEmpty = true;
		this.includeInPlayerCount = false;

		this.element.onchange = function() { viewPlayers.events.selectPlayerBySelect(); }

	}

	player () {
		return data.players.player(this.value);
	}

	render() {

		ViewSearchFilter.prototype.render.call(this);

		let count = this.element.options.length;
		var countDescription = functions.getCountDescription(count, 'player');
		viewPlayers.elements.filteredPlayersCount.setValue(countDescription);

	}

	select (playerId) {
		controller.setCurrentPlayer(playerId);
		ViewSearchFilter.prototype.select.call(this, playerId);
		viewPlayers.elements.playersTable.render();
	}

	deselect () {
		controller.unsetCurrentPlayer();
		this.clearValue();
	}

}