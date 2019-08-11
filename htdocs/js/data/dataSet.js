
function DataSet(typeName)
{
	this.typeName = typeName;
	this.items = new Array();
}

DataSet.prototype.load =  function () {
	data.loadFile(this);
}

DataSet.prototype.addItem =  function (i) {
	this.items.push(i);
}

DataSet.prototype.sort =  function () {
	this.items.sort(function(i1, i2){return i1[i1.sortProperty] > i2[i2.sortProperty]});
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