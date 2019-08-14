
function SquadNos()
{
	DataSet.call(this, 'SquadNos')
}
SquadNos.prototype = Object.create(DataSet.prototype)

SquadNos.prototype.add =  function (squadNo) {
	sn = new SquadNo(squadNo);
	this.addSquadNo(sn);
}

SquadNos.prototype.loadFile = function (file) { 
	file.squadNos.forEach(
		function (sn) { 
			data.squadNos.add(sn, sn);
		}
	)
}

SquadNos.prototype.addSquadNo = function (pn)
{
	this.addItem(pn);
}