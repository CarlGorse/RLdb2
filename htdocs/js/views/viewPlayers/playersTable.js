
class ViewPlayersTable extends DocumentTable {

	constructor (elementId, dataSet)
	{
		super (elementId);
		this.dataSet = dataSet;
		this.pagePtr = 0;
		this.pageCount = 0;
		this.memberPageCount = 15;
	}

	render () {

		controller.setFilteredPlayers();
		this.pageCount = Math.floor((controller.filteredPlayers.count() - 1) / this.memberPageCount) + 1;

		var playerIndex = -1;
		if (controller.currentPlayer != null)
		{
			playerIndex = controller.filteredPlayers.index(controller.currentPlayer.playerId);
			this.pagePtr = Math.floor(playerIndex / this.memberPageCount);
		}

		viewPlayers.elements.pageCount.setValue('Page' + ' ' + (this.pagePtr + 1) + ' of ' + this.pageCount);

		viewPlayers.elements.playersTable.clear();
		for (var x = 0; x < this.memberPageCount; x ++)
		{
			var playerPtr = x + (this.pagePtr * this.memberPageCount);	
			if (playerPtr >= controller.filteredPlayers.count()) break;

			var row = this.element.insertRow();
			var playerId = controller.filteredPlayers.items[playerPtr].playerId;
			row.playerId = playerId;
			row.onclick = function() { 
				viewPlayers.events.selectPlayerByTable(this); 
			}
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);	
			var cell3 = row.insertCell(3);
			let p = data.players.item(playerId);
			cell0.innerHTML = p.name;
			cell1.innerHTML = data.clubs.club(p.clubId).name2;
			cell2.innerHTML = p.positionId ? data.positions.position(p.positionId).name : '';
			cell3.innerHTML = p.squadNo;

			if ((controller.currentPlayer != null) && (row.playerId == controller.currentPlayer.playerId))
			{
				row.style.backgroundColor = "yellow";
			}

		}

		this.setButtons(playerIndex);	

	}

	setButtons (playerIndex) {
		
		viewPlayers.elements.movePlayerFirst.enable();
		viewPlayers.elements.movePlayerPrevious.enable();
		viewPlayers.elements.movePlayerNext.enable();
		viewPlayers.elements.movePlayerLast.enable();

		viewPlayers.elements.movePageFirst.enable();
		viewPlayers.elements.movePagePrevious.enable();
		viewPlayers.elements.movePageNext.enable();
		viewPlayers.elements.movePageLast.enable();

		if ((playerIndex == 0) || (playerIndex == -1))
		{
			viewPlayers.elements.movePlayerFirst.disable();
			viewPlayers.elements.movePlayerPrevious.disable();
		}

		if ((playerIndex == controller.filteredPlayers.count()-1))
		{
			viewPlayers.elements.movePlayerLast.disable();
		}

		if ((playerIndex == controller.filteredPlayers.count()-1))
		{
			viewPlayers.elements.movePlayerNext.disable();
		}

		if (controller.filteredPlayers.count() < this.memberPageCount)
		{
			viewPlayers.elements.movePageLast.disable();
		}

		if (this.pagePtr == 0)
		{
			viewPlayers.elements.movePageFirst.disable();
			viewPlayers.elements.movePagePrevious.disable();
		}

		var lastPagePtr = Math.floor(controller.filteredPlayers.count() / this.memberPageCount);
		if (this.pagePtr == lastPagePtr)
		{
			viewPlayers.elements.movePageNext.disable();
			viewPlayers.elements.movePageLast.disable();
		}

	}

	movePageFirst () {
		this.movePage(0);
	}

	movePagePrevious () {
		this.movePage(this.pagePtr - 1);
	}

	movePageNext () {
		this.movePage(this.pagePtr + 1);
	}

	movePageLast () {
		var pagePtr = Math.floor(controller.filteredPlayers.count() / this.memberPageCount);
		this.movePage(pagePtr);
	}

	movePage (pagePtr)
	{
		viewPlayers.deselectPlayer();
		this.pagePtr = pagePtr;
		this.render();
	}

	movePlayerFirst () {
		var playerId = 0
		if (controller.currentPlayer == null)
			playerId = controller.filteredOlayers.last.playerId;
		else
		playerId = controller.filteredPlayers.first.playerId;
		viewPlayers.selectPlayer(playerId);
	}

	movePlayerPrevious () {
		var playerId = controller.filteredPlayers.previous(controller.currentPlayer).playerId;
		viewPlayers.selectPlayer(playerId);
	}

	movePlayerNext () {
		var playerId = 0
		if (controller.currentPlayer == null)
			playerId = controller.filteredPlayers.first.playerId;
		else
			playerId = controller.filteredPlayers.next(controller.currentPlayer).playerId;
		viewPlayers.selectPlayer(playerId);
	}

	movePlayerLast () {
		var playerId = controller.filteredPlayers.last.playerId;
		viewPlayers.selectPlayer(playerId);
	}

	setFilteredPlayers () {
		this.filteredPlayers.clear();
		data.players.items.forEach (
			function(di) {
				var f = view.elements.playerFilter;
				if (this.isPlayerFiltered(di)) {
					this.filteredPlayers.addPlayer(di);
				}
			}, this	
		)
	}

	isPlayerFiltered (di) {
		var f = view.elements.playerFilter;
		var playerCount = view.elements.playerFilter.playerCount(di[f.searchProperty]);
		return (playerCount > 0)
	}

}