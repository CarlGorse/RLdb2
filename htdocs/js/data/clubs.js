
function Clubs()
{
	DataSet.call(this, 'Clubs')
}
Clubs.prototype = Object.create(DataSet.prototype)

Clubs.prototype.add =  function (clubId, name, name2, image) {
	c = new Club(clubId, name, name2, image);
	this.addClub(c);
}

Clubs.prototype.club = function (id) { return this.item(id); }

Clubs.prototype.loadFile = function (file) {
	file.clubs.forEach(
		function (c) { 
			data.clubs.add(c.clubId, c.name, c.name2, c.image); 
		}
	) 
}

Clubs.prototype.addClub = function (c)
{
	this.addItem(c);
}