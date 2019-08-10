
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