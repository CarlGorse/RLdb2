
function Filters()
{
	
	this.items = new Array();
	
}

Filters.prototype.add = function (filter) { this.items.push(filter); } 

Filters.prototype.refresh =  function () { this.items.forEach( function (f) { this.refreshFilter(f); } ) }

Filters.prototype.refreshFilter = function (filter) { } 