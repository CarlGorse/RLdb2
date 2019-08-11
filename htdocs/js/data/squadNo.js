
function SquadNo(squadNoId, number)
{
	DataItem.call(this, squadNoId, 'SquadNo', 'number')
	this.squadNoId = squadNoId;
	this.number = number;
}
SquadNo.prototype = Object.create(DataItem.prototype)