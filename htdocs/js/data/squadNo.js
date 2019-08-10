
function SquadNo(id, number)
{
	DataItem.call(this, id, 'SquadNo', 'number')
	this.number = number;
}
SquadNo.prototype = Object.create(DataItem.prototype)