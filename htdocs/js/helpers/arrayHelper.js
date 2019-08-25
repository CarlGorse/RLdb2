
class ArrayHelper extends Array {

	clone () {
		return this.slice(0);
	}

	clear () {
		this.length = 0;
	}

	get count () {
		return this.length;
	}

	index (findValue, propertyName) {
		for (var x = 0; x < this.count; x++)
		{
			if (propertyName.length > 0)
			{
				if (this[x][propertyName] == findValue) return x;
			}
			else
			{
				if (this[x] == findValue) return x;
			}
		}
		return null;
	}

}