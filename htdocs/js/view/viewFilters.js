
function ViewFilters()
{
	this.items = new ArrayHelper();
}

ViewFilters.prototype.initialise = function () {
}

ViewFilters.prototype.add = function (filter) {
	this.items.push(filter);
} 

ViewFilters.prototype.render =  function () { 
	
	this.items.forEach( 
		function (f) { 
			f.render();
		} 
	)

	view.elements.playersTable.render();
	
}

ViewFilters.prototype.first = function () {
	this.items[0];
} 

ViewFilters.prototype.item = function (elementId) {
	this.items.forEach( function (f)
		{
			if (f.elementId == elementId) return f;
		}
	)
} 