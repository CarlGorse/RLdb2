function view()
{

	src="js/controller/controller.js?$$REVISION$$"
	src="js/model/model.js?$$REVISION$$"

	var clubFilter = new ClubFilter();
	var positionsFilter = new PositionsFilter();
	var squadNoFilter = new SquadNoFilter();
	var hasImageFilter = new HasImageFilter();
	var playerFilter = new PlayerFilter();
	var club2Filter = new ClubFilter();
	var positions2Filter = new Positions(Filter);
	var squadNoFilter = new SquadNoFilter();
	
	var filters = new Filters();
	filters.add([clubFilter, positionsFilter, squadNoFilter, hasImageFilter, playerFilter, club2Filter, positionFilter, squadNoFilter]);
	
	function.events()
	{

		function onInitialise();
		function onSelectFilter(filterId) 	{ view.selectFilter(); }
		function onSelectPlayer()			{ view.selectPlayer(); }
		function onAddPlayer() 				{ view.addPlayer(); }	
		function onEditPlayer(p) 			{ view.editPlayer(); }
		function onCeletePlayer() 			{ view.deletePlayer(); }
		function onSavePlayer() 			{ view.SavePlayer(); }
	
	}
	
	function element()
	{
		var pName = 		element.getElementById('pName');
		var pClub = 		element.getElementById('pClub');
		var pPositions = 	element.getElementById('pPositions');
		var pSquadNo = 		element.getElementById('pSquadNo');
		var pImage = 		element.getElementById('pImage');
		
		var pName2 = 		element.getElementById('pName2');
		var pClub2 = 		element.getElementById('pClub2');
		var pPositions2 = 	element.getElementById('pPositions2');
		var pSquadNo2 = 	element.getElementById('pSquadNo2');
		var pImage2 = 		element.getElementById('pImage2');
		
		function getElementById() { return document.getElementById(id); }
		
	}

	function onInitialise()
	{
		view.hidePlayerDetails();
		view.hideEditPlayerDetails();
		data.load();
		view.filters.refresh();
	}

	function selectFilter(filterId)
	{
		filter = view.getFilter(filterId);
		filter.events.onSelect();
	}

	function selectPlayer()
	{
		view.hideEditPlayerDetails();
		view.showPlayerDetails();
		
		p = view.element.playerFilter.player;
		controller.setCurrentPlayer(p);
		
		view.element.pName = p.name.displayValue;
		view.element.pClub = p.club.name.displayValue;
		view.element.pPositions = p.positions.displayValue;
		view.element.pSquadNo = p.squadNo.displayValue;
	}

	function addPlayer()
	{
		var p = new Player();
		controller.setCurrentPlayer(p);
		view.showEditPlayer();
	}

	function editPlayer()
	{
		var p = view.playerFilter.player;
		controller.setCurrentPlayer(p);
		view.showEditPlayer();
	}
	
	function deletePlayer()
	{
		var p = controller.currentPlayer;	// save current player before deleted from data/controller
		controller.deletePlayer(p);
		view.showMessage('Player ' + p.name + ' deleted.');
	}
	
	function savePlayer()
	{
		controller.savePlayer();
		view.showMessage('Player ' + controller.currentPlayer.name + ' saved.');
	}
	
	function getFilter(filterId)
	{
		return view.filters.First(f => f.filterId = filterId);
	}
	
	function showEditPlayer()
	{
		view.hidePlayerDetails();
		
		view.element.pName2.setValue(p.name.value);
		view.element.pClub2.setValue(p.club.value);
		view.element.pPositions2.setValue(p.positions.values);
		view.element.pSquadNo2.setValue(p.squadNo.value);
		view.element.pImage2.setValue = p.image.value;
		
		this.showEditPlayerDetails();
		
	}
	
	function showPlayerDetails()		{ view.element.playerDetails.show(); }
	function hidePlayerDetails()		{ view.element.playerDetails.hide(); }
	function showEditPlayerDetails()	{ view.element.editPlayerDetails.show(); }
	function hideEditPlayerDetails()	{ view.element.editPlayerDetails.hide(); }


}