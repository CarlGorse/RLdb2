
function View()
{

	this.events = new ViewEvents(this);
	this.elements = new ViewElements(this);

	this.clubFilter = new ViewFilterClub('clubFilter', this.elements.clubFilter.element, 'name2');
	this.positionsFilter = new ViewFilterPositions('positionsFilter', this.elements.positionsFilter.element, 'name');
	this.squadNoFilter = new ViewFilterSquadNo('squadNoFilter', this.elements.squadNoFilter.element, 'number');
	this.hasImageFilter = new ViewFilterHasImage('hasImageFilter', this.elements.hasImageFilter.element, 'text');
	this.playerFilter = new ViewFilterPlayer('playerFilter', this.elements.playerFilter.element, 'name');
	this.pClub2 = new ViewFilterClub('pClub2', this.elements.pClub2.element, 'name2');
	this.pPosition2 = new ViewFilterPositions('pPositions2', this.elements.pPosition2.element, 'name');
	this.pSquadNo2 = new ViewFilterSquadNo('pSquadNo2', this.elements.pSquadNo2.element, 'number');
	
	this.filters = new ViewFilters();
	[this.clubFilter, this.positionsFilter, this.squadNoFilter, this.hasImageFilter, this.playerFilter, this.pClub2, this.pPosition2, this.pSquadNo2].forEach(
		function (f) {
			this.filters.items.push(f);
		}, this
	);
	
}

View.prototype.loadDisplay =  function () {
	this.hidePlayerDetails();
	this.hideEditPlayerDetails();
	controller.loadData();
	this.filters.refresh();
	
	this.selectPlayer();
	
}

function ViewEvents() {
ViewEvents.prototype.selectFilter = function (filterId) { view.selectFilter(filterId); }
ViewEvents.prototype.selectPlayer = function () 		{ view.selectPlayer(); }
ViewEvents.prototype.addPlayer = 	function () 		{ view.addPlayer(); }	
ViewEvents.prototype.editPlayer = 	function (p) 		{ view.editPlayer(p); }
ViewEvents.prototype.deletePlayer = function () 		{ view.deletePlayer(); }
ViewEvents.prototype.savePlayer = 	function () 		{ view.savePlayer(); }	
}

View.prototype.selectFilter = function (filterId) {
	filter = view.getFilter(filterId);
}

View.prototype.selectPlayer = function () {
	
	view.hideEditPlayerDetails();
	view.showPlayerDetails();
		
	p = view.playerFilter.player();
	controller.setCurrentPlayer(p);
		
	view.elements.pName.setValue(p.name);
	view.elements.pClub.setValue(data.getClubById(p.clubId).name2);
	view.elements.pPosition.setValue(data.getPositionById(p.positionId).name);
	view.elements.pSquadNo.setValue(p.squadNo);
	
	if (p.image)
		view.elements.pImage.element.style.display = "block";
	else
		view.elements.pImage.element.style.display = "none";
	view.elements.pImage.setValue(p.image);
	
}

View.prototype.addPlayer = function () {
	var p = controller.addPlayer();
	controller.setCurrentPlayer(p);
	view.showEditPlayer();
}

View.prototype.editPlayer = function () {
	view.showEditPlayer();
}

View.prototype.deletePlayer = function () {
	var p = controller.currentPlayer;	// save current player before deleted from data/controller
	controller.deletePlayer(p);
	controller.savePlayers();
	view.showMessage('Player ' + p.name + ' deleted.');
}

View.prototype.savePlayer = function () {
	var p = controller.currentPlayer;
	p.name = view.elements.pName2.value();
	p.clubId = view.elements.pClub2.value();
	p.positionId = view.elements.pPosition2.value();
	p.squadNo = view.elements.pSquadNo2.value();
	p.image = view.elements.pImage2.value();
	
	controller.savePlayers();
	view.showMessage('Player ' + controller.currentPlayer.name + ' saved.');
}

View.prototype.showMessage = function (text) {
	alert(text);
}

View.prototype.getFilter = function (filterId) {
	return view.filters.item(filterId);
}

View.prototype.showEditPlayer = function () {

	view.hidePlayerDetails();
	
	p = controller.currentPlayer;
	
	view.elements.pName2.setValue(p.name);
	view.elements.pClub2.setValue(p.clubId);
	view.elements.pPosition2.setValue(p.position);
	view.elements.pSquadNo2.setValue(p.squadNo);
	view.elements.pImage2.setValue(p.image);
		
	this.showEditPlayerDetails();
		
}

View.prototype.showPlayerDetails = 		function () { this.elements.playerDetails.show(); }
View.prototype.hidePlayerDetails = 		function () { this.elements.playerDetails.hide(); }
View.prototype.showEditPlayerDetails = 	function () { this.elements.editPlayerDetails.show(); }
View.prototype.hideEditPlayerDetails = 	function () { this.elements.editPlayerDetails.hide(); }

function ViewElements() {
	
	this.pName = 		new ViewElement('pName');
	this.pClub = 		new ViewElement('pClub');
	this.pPosition = 	new ViewElement('pPosition');
	this.pSquadNo = 	new ViewElement('pSquadNo');
	this.pImage = 		new ViewElementImage('pImage');
		
	this.pName2 = 		new ViewElementInput('pName2');
	this.pClub2 = 		new ViewElementComboBox('pClub2');
	this.pPosition2 = 	new ViewElementComboBox('pPosition2');
	this.pSquadNo2 = 	new ViewElementComboBox('pSquadNo2');
	this.pImage2 = 		new ViewElementInput('pImage2');
	
	this.playerDetails =		new ViewElement('playerDetails');
	this.editPlayerDetails =	new ViewElement('editPlayerDetails');
	
	this.clubFilter =		new ViewElementComboBox('clubFilter');
	this.positionsFilter =	new ViewElementComboBox('positionsFilter');
	this.squadNoFilter =	new ViewElementComboBox('squadNoFilter');
	this.hasImageFilter =	new ViewElementComboBox('hasImageFilter');
	this.playerFilter =		new ViewElementComboBox('playerFilter');

}

function ViewElement(elementId)
{
	this.elementId = elementId;
	this.element = document.getElementById(elementId);
}

ViewElement.prototype.show = function () { this.element.style.display = "block"; }
ViewElement.prototype.hide = function () { this.element.style.display = "none"; }
ViewElement.prototype.setValue = function (value) { this.element.innerHTML = value; }
ViewElement.prototype.value = function () { return this.element.innerHTML; }

function ViewElementInput(elementId)
{
	ViewElement.call(this, elementId);
}
ViewElementInput.prototype = Object.create(ViewElement.prototype)
ViewElementInput.prototype.setValue = function (value) { this.element.value = value; }
ViewElementInput.prototype.value = function () { return this.element.value; }

function ViewElementComboBox(name)
{
	ViewElement.call(this, name);
}
ViewElementComboBox.prototype = Object.create(ViewElement.prototype)

ViewElementComboBox.prototype.setValue = function (itemId) { 
	for (var x = 0; x < this.element.length; x ++)
	{
		o = this.element.options[x];
		o.selected = false;
		if (o.value == itemId) o.selected = true;
	}
}
ViewElementComboBox.prototype.value = function () { return this.element.options[this.element.selectedIndex].value; }

function ViewElementImage(name)
{
	ViewElement.call(this, name);
}
ViewElementImage.prototype = Object.create(ViewElement.prototype)
ViewElementImage.prototype.setValue = function (value) { this.element.src = "images\\" + value; }