
function Filters()
{
	
	this.filters = new Array();
	
	function add(filters)
	{
		filters.forEach( function (f) { this.filters.push(f); } )
	}
	
	function refresh()
	{
		filters.forEach( function (f) { this.refreshFIlter(f); } )
	}
	
	function refreshFilter(filter)
	{
	}
	
}