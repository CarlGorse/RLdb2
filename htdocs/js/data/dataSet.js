
function DataSet(typeName)
{
	this.typeName = typeName;
	this.items = new Array();
	
	this.fileName = "";
}

DataSet.prototype.load = function () {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "data\\" + this.fileName, false);
	xmlhttp.send();

	var file = JSON.parse(xmlhttp.responseText); 
	eval('this.loadFile')(file);

	this.sort();		
}

DataSet.prototype.addItem = function (i) {
	this.items.push(i);
}

DataSet.prototype.sort =  function () {
	this.items.sort(function(i1, i2){
		if (i1[i1.sortProperty] < i2[i2.sortProperty]) { return -1};
		if (i1[i1.sortProperty] > i2[i2.sortProperty]) { return 1};
		return 0;
	});
}

DataSet.prototype.count = function () { 
	return Functions.Array.count(this.items);
}

DataSet.prototype.item = function (id) { 
	var result = null;
	this.items.forEach( 
		function (di) { 
			if (di.id.toString() == id)
				result = di;
		}
	) 
	return result;
}

DataSet.prototype.clear = function ()
{
	functions.Array.clear(this.items);
}

DataSet.prototype.count = function () { 
	return this.items.length;
}

DataSet.prototype.remove = function (dataItem) {
	var index = this.index(dataItem.id);
	this.items.splice(index, 1);
}

DataSet.prototype.writeJSON = function ()
{
	var xmlhttp = new XMLHttpRequest();
	var filePath = 'C://Git//repos//RLdb2//htdocs//data/' + this.fileName ;
		
	xmlhttp.open("POST","/php/saveFile.php?filename=" + filePath,false);
		
	var dataSetJSON = this.getJSON();
	var fd = new FormData();
	fd.append("playersJSON", dataSetJSON);
	xmlhttp.send(fd);
}

DataSet.prototype.index = function(id)
{
	return functions.Array.index(this.items, id, 'id');
}

DataSet.prototype.previous = function(dataItem)
{
	return this.items[this.index(dataItem.id)-1];
}

DataSet.prototype.next = function(dataItem)
{
	return this.items[this.index(dataItem.id)+1];
}

DataSet.prototype.last = function()
{
	return this.items[this.count()-1];
}

DataSet.prototype.first = function()
{
	return this.items[0];
}
