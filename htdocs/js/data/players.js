
function Players()
{
	DataSet.call(this, 'Players')
}
Players.prototype = Object.create(DataSet.prototype)
Players.prototype.add =  function (name, clubId, positions, squadNo, image) {
	p = new Player(name, clubId, positions, squadNo, image);
	this.addItem(p);
}

Players.prototype.nextId = function () {
	var result = 0;
	this.items.forEach(
		function (p)
		{
			if (p.id >= result) result = p.id + 1;
		}
	)
	return result;
}