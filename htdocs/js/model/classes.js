
function DataSet(typeName)
{
	this.typeName = typeName;
	this.items = new Array();
}
DataSet.prototype.load =  function () {
	model.loadFile(this);
}

function Players()
{
	DataSet.call(this, 'Players')
}
Players.prototype = Object.create(DataSet.prototype)

function Clubs()
{
	DataSet.call(this, 'Clubs')
}
Clubs.prototype = Object.create(DataSet.prototype)

function Positions()
{
	DataSet.call(this, 'Positions')
}
Positions.prototype = Object.create(DataSet.prototype)

function SquadNos()
{
	DataSet.call(this, 'SquadNos')
}
SquadNos.prototype = Object.create(DataSet.prototype)

function HasImages()
{
	DataSet.call(this, 'HasImages')
}
HasImages.prototype = Object.create(DataSet.prototype)

function DataItem(id, typeName) {
	this.id = id;
	this.typeName = typeName;
	this.fileName = '';
}

function Player(id, name, clubId, positions, squadNo, image)
{
	DataItem.call(this, id, 'Player')
	this.name = name;
	this.clubId = clubId;
	this.positions = positions;
	this.squadNo = squadNo;
	this.image - image;
}
Player.prototype = Object.create(DataItem.prototype)

function Club(id, name)
{
	DataItem.call(this, id, 'Club')
	this.name = name;
}
Club.prototype = Object.create(DataItem.prototype)

function Position(id, name)
{
	DataItem.call(this, id, 'Position')
	this.name = name;
}
Position.prototype = Object.create(DataItem.prototype)

function SquadNo(id, number)
{
	DataItem.call(this, id, 'SquadNo')
	this.number = number;
}
SquadNo.prototype = Object.create(DataItem.prototype)

function Image(id, filename)
{
	DataItem.call(this, id, 'Image')
	this.filename = filename;
}
Image.prototype = Object.create(DataItem.prototype)