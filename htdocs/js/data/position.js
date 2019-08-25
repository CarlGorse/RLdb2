
class Position extends DataItem {

	constructor (positionId, name) {
		super (positionId, 'Position', 'name');
		this.positionId = positionId;
		this.name = name;
	}

}