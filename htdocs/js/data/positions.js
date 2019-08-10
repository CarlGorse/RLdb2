
function Positions()
{
	DataSet.call(this, 'Positions')
}
Positions.prototype = Object.create(DataSet.prototype)
Positions.prototype.add =  function (id, name) {
	pn = new Position();
	pn.id = id;
	pn.name = name;
	this.addItem(pn);
}
