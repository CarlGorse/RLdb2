
function Clubs()
{
	DataSet.call(this, 'Clubs')
}
Clubs.prototype = Object.create(DataSet.prototype)
Clubs.prototype.add =  function (clubId, name, name2) {
	c = new Club(clubId, name, name2);
	this.addItem(c);
}