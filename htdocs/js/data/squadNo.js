
class SquadNo extends DataItem {

	constructor (number)
	{
		super (number, 'SquadNo', 'number');
		this.number = number;
		this.squadNo = number; // required for searching on p.squadNo
	}

}