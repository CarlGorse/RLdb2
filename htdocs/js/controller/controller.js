
function controller()
{
	
	src="js/view/view.js?$$REVISION$$"
	src="js/data/data.js?$$REVISION$$"
	
	this.currentPlayer = null;
	
	function setCurrentPlayer(p)
	{
		this.currentPlayer = p;
	}
	
	function deletePlayer(p)
	{
		data.players.remove(p);
	}
	
	function savePlayer(p)
	{
		data.players.save(p);
	}
	
}