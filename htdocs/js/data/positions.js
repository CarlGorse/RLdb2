
function Positions()
{
	DataSet.call(this, 'Positions')
}
Positions.prototype = Object.create(DataSet.prototype)

Positions.prototype.add =  function (id, name) {
	pn = new Position(id, name);
	this.addPosition(pn);
}

Positions.prototype.position = function (id) { return this.item(id); }

Positions.prototype.loadFile = function (file) { 
	file.positions.forEach( 
		function (pn) { 
			data.positions.add(pn.positionId, pn.name); 
		} 
	) 
}

Positions.prototype.addPosition = function (pn)
{
	this.addItem(pn);
}