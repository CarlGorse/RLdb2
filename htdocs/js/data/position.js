
function Position(positionId, name)
{
	DataItem.call(this, positionId, 'Position', 'name')
	this.positionId = positionId;
	this.name = name;
}
Position.prototype = Object.create(DataItem.prototype)