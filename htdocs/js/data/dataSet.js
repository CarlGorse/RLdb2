
class DataSet {

	constructor (typeName, filename)
	{
		this.typeName = typeName;
		this.filename = filename;
		this.items = new ArrayHelper();
	}

	load () {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "data\\" + this.filename, false);
		xmlhttp.send();

		var file = JSON.parse(xmlhttp.responseText); 
		eval('this.loadFile')(file);

		this.sort();		
	}

	addItem (i) {
		this.items.push(i);
	}

	sort () {
		this.items.sort(function(i1, i2){
			if (i1[i1.sortProperty] < i2[i2.sortProperty]) { return -1};
			if (i1[i1.sortProperty] > i2[i2.sortProperty]) { return 1};
			return 0;
		});
	}

	item (id) { 
		var result = null;
		this.items.forEach( 
			function (di) { 
				if (di.id.toString() == id)
					result = di;
			}
		) 
		return result;
	}

	clear ()
	{
		this.items.clear(this.items);
	}

	count () { 
		return this.items.count;
	}

	remove (dataItem) {
		var index = this.index(dataItem.id);
		this.items.splice(index, 1);
	}

	writeJson ()
	{
		var xmlhttp = new XMLHttpRequest();
		var filePath = 'C://Git//repos//RLdb2//htdocs//data/' + this.filename ;
			
		xmlhttp.open("POST","/php/saveFile.php?filename=" + filePath, false);
			
		var dataSetJson = this.getJson();
		var fd = new FormData();
		fd.append("playersJson", dataSetJson);
		xmlhttp.send(fd);
	}

	index (id)
	{
		return this.items.index(id, 'id');
	}

	previous (dataItem)
	{
		return this.items[this.index(dataItem.id)-1];
	}

	next (dataItem)
	{
		return this.items[this.index(dataItem.id)+1];
	}

	get last ()
	{
		return this.items[this.count()-1];
	}

	get first ()
	{
		return this.items[0];
	}

}