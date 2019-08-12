
function ViewFilters()
{
	
	this.items = new Array();
	
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
	
}

ViewFilters.prototype.first = function () {
	this.items[0];
} 

ViewFilters.prototype.item = function (filterId) {
	this.items.forEach( function (f)
		{
			if (f.filterId == filterId) return f;
		}
	)
} 