
function DataSet(typeName)
{
	this.typeName = typeName;
	this.items = new Array();
	
	this.fileName = "";
}

DataSet.prototype.addItem = function (i) {
	this.items.push(i);
}

DataSet.prototype.sort =  function () {
	this.items.sort(function(i1, i2){return i1[i1.sortProperty] > i2[i2.sortProperty]});
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

DataSet.prototype.count = function () { 
	return this.items.length;
}

DataSet.prototype.getIdIndex = function (id) {
	for (var x = 0; x < this.items.length; x++)
	{
		var di = this.items[x];
		if (di.id == id) return x;
	}
	return null;
}

DataSet.prototype.remove = function (dataItem) {
	var index = this.getIdIndex(dataItem.id);
	this.items.splice(index, 1);
}

DataSet.prototype.writeJSON = function ()
{
	var xmlhttp = new XMLHttpRequest();
	var filePath = 'C://Git//repos//RLdb2//htdocs//files/' + this.fileName ;
		
	xmlhttp.open("POST","/php/saveFile.php?filename=" + filePath,true);
		
	var dataSetJSON = this.getJSON();
	var fd = new FormData();
	fd.append("playersJSON", dataSetJSON);
	xmlhttp.send(fd);
}

DataSet.prototype.load = function () {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "files\\" + this.fileName, false);
	xmlhttp.send();

	var file = JSON.parse(xmlhttp.responseText); 
	eval('this.loadFile')(file);

	this.sort();		
}