
function ViewFilters()
{
	
	this.items = new Array();
	
}

ViewFilters.prototype.add = function (filter) {
	this.items.push(filter);
} 

ViewFilters.prototype.refresh =  function () { 
	
	this.items.forEach( 
		function (f) { 
			f.load();
			f.render();
		} 
	) 
	
}
