
Player.prototype = Object.create(ModelItemBase.prototype)

function ModelItemBase(id) {
	this.id = id;
}

function Player(id, name, clubId, positions, squadNo, image)
{
	model.ModelItemBase.call(this, id)
	this.name = name;
	this.clubId = clubId;
	this.positions = positions;
	this.squadNo = squadNo;
	this.image - image;
}

function Club(id, name)
{
	model.ModelItemBase.call(this, id)
	this.name = name;
}

function Positions(id)
{
	model.ModelItemBase.call(this, id)
	this.name = name;
	this.positions = new Array();
}

function Position(id. name)
{
	model.ModelItemBase.call(this, id)
	this.name = name;
}

function SquadNo(id, number)
{
	model.ModelItemBase.call(this, id)
	this.number = number;
}

function Image(id, filename)
{
	model.ModelItemBase.call(this, id)
	this.filename = filename;
}