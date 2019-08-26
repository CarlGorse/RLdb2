
class ViewPlayerElements {

	initialise () {

		this.playerDetails =		new DocumentElement('divPlayerDetails');
		this.editPlayerDetails =	new DocumentElement('editPlayerDetails');

		this.clubFilter = 		this.initialiseSearchFilter( new ViewPlayersSearchFilterClub ( {	elementId: 'clubFilter', displayProperty: 'name2'} ));
		this.positionFilter = 	this.initialiseSearchFilter( new ViewPlayersSearchFilter ( { 		elementId: 'positionFilter', dataSet: data.positions, displayProperty: 'name', searchProperty: 'positionId', showOptionNone: true } ));
		this.squadNoFilter = 	this.initialiseSearchFilter( new ViewPlayersSearchFilter ( { 		elementId: 'squadNoFilter', dataSet: data.squadNos, displayProperty: 'number', searchProperty: 'squadNo', showOptionNone: true } ));
		this.hasImageFilter = 	this.initialiseSearchFilter( new ViewPlayersSearchFilter ( { 		elementId: 'hasImageFilter', dataSet: data.hasImages, displayProperty: 'text', searchProperty: 'hasImageId', showOptionNone: false } ));
		this.playerFilter = 	this.initialiseSearchFilter( new ViewPlayersSearchFilterPlayer ( { 	elementId: 'playerFilter', displayProperty: 'name' } ));

		this.cImage = 				new DocumentImage('cImage');

		this.filteredPlayersCount = new DocumentSpan('filteredPlayersCount');

		this.movePlayerFirst =  	new DocumentButton('movePlayerFirst', viewPlayers.events.movePlayerFirst);
		this.movePlayerPrevious = 	new DocumentButton('movePlayerPrevious', viewPlayers.events.movePlayerPrevious);
		this.movePlayerNext = 		new DocumentButton('movePlayerNext', viewPlayers.events.movePlayerNext);
		this.movePlayerLast = 		new DocumentButton('movePlayerLast', viewPlayers.events.movePlayerLast);

		this.playersTable = 	new ViewPlayersTable('playersTable', data.players);

		this.pForename = 		new DocumentElement('pForename');
		this.pSurname = 		new DocumentElement('pSurname');
		this.pClub = 			new DocumentElement('pClub');
		this.pPosition = 		new DocumentElement('pPosition');
		this.pSquadNo = 		new DocumentElement('pSquadNo');
		this.pImage = 			new DocumentImage('pImage');
			
		this.pForename2 = 		new DocumentInput('pForename2');
		this.pSurname2 = 		new DocumentInput('pSurname2');
		this.pClub2 = 			new DataSelect('pClub2', data.clubs, 'name2');
		this.pPosition2 = 		new DataSelect('pPosition2', data.positions, 'name');
		this.pSquadNo2 = 		new DataSelect('pSquadNo2', data.squadNos, 'number');
		this.pImage2 = 			new DocumentInput('pImage2');

		this.movePageFirst =  	new DocumentButton('movePageFirst', viewPlayers.events.movePageFirst);
		this.movePagePrevious = new DocumentButton('movePagePrevious', viewPlayers.events.movePagePrevious);
		this.movePageNext = 	new DocumentButton('movePageNext', viewPlayers.events.movePageNext);
		this.movePageLast = 	new DocumentButton('movePageLast', viewPlayers.events.movePageLast);

		this.addPlayer = 		new DocumentButton('addPlayer', viewPlayers.events.addPlayer);
		this.editPlayer = 		new DocumentButton('editPlayer', viewPlayers.events.editPlayer);
		this.deletePlayer = 	new DocumentButton('deletePlayer', viewPlayers.events.deletePlayer);
		this.savePlayer = 		new DocumentButton('savePlayer', viewPlayers.events.savePlayer);
		
		this.pageCount = 		new DocumentSpan('pageCount');

	}

	initialiseSearchFilter(filter)
	{
		viewPlayers.filters.items.push(filter); 
		
		filter.element.onchange = function() {
			viewPlayers.events.changeFilter(filter);
		}

		return filter;
	}

}