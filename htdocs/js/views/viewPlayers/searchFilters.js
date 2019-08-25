
class ViewSearchFilters {

	constructor () {
		this.items = new ArrayHelper();
	}

	initialise() {
	}

	add (filter) {
		this.items.push(filter);
	} 

	render () { 
		
		this.items.forEach( 
			function (f) { 
				f.render();
			} 
		)

		viewPlayers.elements.playersTable.render();
		
	}

	first () {
		this.items[0];
	} 

	item (elementId) {
		this.items.forEach( function (f)
			{
				if (f.elementId == elementId) return f;
			}
		)
	} 

}