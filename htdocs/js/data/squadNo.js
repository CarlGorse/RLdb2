
function SquadNo(number)
{
	DataItem.call(this, number, 'SquadNo', 'number')
	this.number = number;
	this.squadNo = number; // required for searching on p.squadNo
}
SquadNo.prototype = Object.create(DataItem.prototype)