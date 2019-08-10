
function Position(id, name)
{
	DataItem.call(this, id, 'Position', 'name')
	this.name = name;
}
Position.prototype = Object.create(DataItem.prototype)