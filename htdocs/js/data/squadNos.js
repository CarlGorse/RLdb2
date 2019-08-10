
function SquadNos()
{
	DataSet.call(this, 'SquadNos')
}
SquadNos.prototype = Object.create(DataSet.prototype)
SquadNos.prototype.add =  function (id, number) {
	sn = new SquadNo();
	sn.id = id;
	sn.number = number;
	this.addItem(sn);
}
