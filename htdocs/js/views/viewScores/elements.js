
class ViewScoresElements {

	initialise () {

		this.clubFilter = this.initialiseSearchFilter ( 
			new ViewSearchFilter ( {	
				elementId: 'clubFilter2', dataSet: data.clubs, displayProperty: 'name2', setInitialValueEmpty: false
			} )
			);

	}

	initialiseSearchFilter(filter)
	{
		viewScores.filters.items.push(filter); 

		return filter;
	}

}