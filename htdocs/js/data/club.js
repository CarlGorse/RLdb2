
function Club(id, name)
{
	DataItem.call(this, id, 'Club', 'name')
	this.name = name;
}
Club.prototype = Object.create(DataItem.prototype)