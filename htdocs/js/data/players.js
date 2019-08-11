
function Players()
{
	DataSet.call(this, 'Players')
}
Players.prototype = Object.create(DataSet.prototype)
Players.prototype.add =  function (name, clubId, positionId, squadNo, image) {
	p = new Player(name, clubId, positionId, squadNo, image);
	this.addItem(p);
	return p;
}

Players.prototype.nextId = function () {
	var result = 0;
	this.items.forEach(
		function (p)
		{
			if (p.playerId >= result) result = p.playerId + 1;
		}
	)
	return result;
}	

Players.prototype.save =  function () {
	writePlayersJSON();
}


	function writePlayersJSON()
	{
		var xmlhttp = new XMLHttpRequest();
		//var filename = 'players2.json';
		var filename = 'C://Git//repos//RLdb2//htdocs//files/players.json';
		//var filename = 'C:\\Git\\repos\\RLdb\htdocs\\players.json';
		
		xmlhttp.open("POST","/php/saveFile.php?filename=" + filename,true);
		//value="test my text";
		//xmlhttp.send("value2="+value);
		
		Json = new Json();
		var playersJSON = Json.getPlayersJSON();
		var fd = new FormData();
		fd.append("playersJSON", playersJSON);
		xmlhttp.send(fd);
	}