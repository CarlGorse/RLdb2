
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

function Players()
{
	DataSet.call(this, 'Players')
}
Players.prototype = Object.create(DataSet.prototype)
Players.prototype.add =  function (name, clubId, positions, squadNo, image) {
	p = new Player(name, clubId, positions, squadNo, image);
	this.addItem(p);
}

Players.prototype.nextId = function () {
	var result = 0;
	this.items.forEach(
		function (p)
		{
			if (p.id >= result) result = p.id + 1;
		}
	)
	return result;
}

function Clubs()
{
	DataSet.call(this, 'Clubs')
}
Clubs.prototype = Object.create(DataSet.prototype)
Clubs.prototype.add =  function (id, name, name2) {
	c = new Club();
	c.id = id;
	c.name = name;
	c.name2 = name2;
	this.addItem(c);
}

function Positions()
{
	DataSet.call(this, 'Positions')
}
Positions.prototype = Object.create(DataSet.prototype)
Positions.prototype.add =  function (id, name) {
	pn = new Position();
	pn.id = id;
	pn.name = name;
	this.addItem(pn);
}

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

function HasImages()
{
	DataSet.call(this, 'HasImages')
}
HasImages.prototype = Object.create(DataSet.prototype)
HasImages.prototype.add =  function (id, text) {
	hi = new HasImages();
	hi.id = id;
	hi.text = text;
	this.addItem(hi);
}

function DataItem(id, typeName, sortProperty) {
	this.id = id;
	this.typeName = typeName;
	this.fileName = '';
	this.sortProperty = sortProperty;
}

function Player(name, clubId, positions, squadNo, image)
{
	id = data.players.nextId();
	DataItem.call(this, id, 'Player', 'name')
	this.name = name;
	this.clubId = clubId;
	this.positions = positions;
	this.squadNo = squadNo;
	this.image - image;
}
Player.prototype = Object.create(DataItem.prototype)

function Club(id, name)
{
	DataItem.call(this, id, 'Club', 'name')
	this.name = name;
}
Club.prototype = Object.create(DataItem.prototype)

function Position(id, name)
{
	DataItem.call(this, id, 'Position', 'name')
	this.name = name;
}
Position.prototype = Object.create(DataItem.prototype)

function SquadNo(id, number)
{
	DataItem.call(this, id, 'SquadNo', 'number')
	this.number = number;
}
SquadNo.prototype = Object.create(DataItem.prototype)

function Image(id, filename)
{
	DataItem.call(this, id, 'Image', 'text')
	this.filename = filename;
}
Image.prototype = Object.create(DataItem.prototype)

Data.prototype.getPlayerById = function (id) { 
	var result = null;
	this.players.items.forEach( 
		function (p) { 
			if (p.id.toString() == id)
					result = p; } 
	) 
	return result;
}

Data.prototype.getClubById = function (id) { 
	var result = null;
	this.clubs.items.forEach( 
		function (c) { 
			if (c.id.toString() == id)
					result = c; } 
	) 
	return result;
}

Data.prototype.getPositionById = function (id) {
	var result = null;
	this.positions.items.forEach( 
		function (pn) { 
			if (pn.id.toString() == id)
					result = pn; } 
	) 
	return result;
}

Data.prototype.getPositionsTextByIds = function (ids) {
	var result = "";
	ids.forEach(
		function (id) {
			data.positions.items.forEach( 
				function (pn) { 
					if (pn.id.toString() == id)
						result += pn.name; } 
			) 
		}
	)

	return result;
}