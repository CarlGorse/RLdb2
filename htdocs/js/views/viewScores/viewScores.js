
class ViewScores {

    constructor () {

		this.elements = new ViewScoresElements(this);
		this.filters = new ViewSearchFilters();
    }

    loadDisplay () {

		this.elements.initialise();

		this.filters.render();

	}
    
}