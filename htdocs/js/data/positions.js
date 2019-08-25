
class Positions extends DataSet {

	constructor (filename) {
		super ('Positions', filename);
	}

	add (id, name) {
		let pn = new Position(id, name);
		this.addPosition(pn);
	}

	position (id) { 
		return this.item(id);
	}

	loadFile (file) { 
		file.positions.forEach( 
			function (pn) { 
				data.positions.add(pn.positionId, pn.name); 
			} 
		) 
	}

	addPosition (pn) {
		this.addItem(pn);
	}

}