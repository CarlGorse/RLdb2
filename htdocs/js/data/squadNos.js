
function SquadNos()
{
	DataSet.call(this, 'SquadNos')
}
SquadNos.prototype = Object.create(DataSet.prototype)

SquadNos.prototype.add =  function (id, number) {
	sn = new SquadNo(id, number);
	this.addItem(sn);
}

SquadNos.prototype.loadFile = function (file) { 
	file.squadNos.forEach(
		function (sn) { 
			data.squadNos.add(sn, sn);
		}
	)
}

