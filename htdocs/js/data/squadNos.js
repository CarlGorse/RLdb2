
function SquadNos()
{
	DataSet.call(this, 'SquadNos')
}
SquadNos.prototype = Object.create(DataSet.prototype)

SquadNos.prototype.add =  function (squadNoId, number) {
	sn = new SquadNo(squadNoId, number);
	this.addItem(sn);
}

SquadNos.prototype.loadFile = function (file) { 
	file.squadNos.forEach(
		function (sn) { 
			data.squadNos.add(sn, sn);
		}
	)
}

