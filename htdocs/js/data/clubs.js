
class Clubs extends DataSet {

	constructor(filename) {
		super('Clubs', filename);
	}
	
	add (clubId, name, name2, image) {
		let c = new Club(clubId, name, name2, image);
		this.addClub(c);
		return c;
	}

	club (id) { 
		return this.item(id); 
	}

	loadFile (file) {
		file.clubs.forEach (
			function (c) { 
				data.clubs.add(c.clubId, c.name, c.name2, c.image); 
			}
		) 
	}

	addClub (c) {
		this.addItem(c);
	}

}