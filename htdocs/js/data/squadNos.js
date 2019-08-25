
class SquadNos extends DataSet {

	constructor (filename) {
		super ('SquadNos', filename);
	}

	add (squadNo) {
		let sn = new SquadNo(squadNo);
		this.addSquadNo(sn);
	}

	loadFile (file) { 
		file.squadNos.forEach(
			function (sn) { 
				data.squadNos.add(sn, sn);
			}
		)
	}

	addSquadNo (pn) {
		this.addItem(pn);
	}

}