
function Clubs()
{
	DataSet.call(this, 'Clubs')
}
Clubs.prototype = Object.create(DataSet.prototype)
Clubs.prototype.add =  function (id, name, name2) {
	c = new Club();
	c.id = id;
	c.name = name;
	c.name2 = name2;
	this.addItem(c);
}