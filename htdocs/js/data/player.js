
class Player extends DataItem {

	constructor (playerId, forename, surname, clubId, positionId, squadNo, image)
	{
		super ( playerId, 'Player', 'name');
		
		this.setProperty('playerId', new NumericProperty(), playerId);
		this.setProperty('forename', new StringProperty(), forename ? forename.trim() : "");
		this.setProperty('surname', new StringProperty(), surname ? surname.trim() : "");
		this.setProperty('clubId', new NumericProperty(), clubId);
		this.setProperty('positionId', new NumericProperty(), positionId);
		this.setProperty('squadNo', new PlayerPropertySquadNo(), squadNo ? squadNo : "");
		this.setProperty('image', new StringProperty(), image ? image.trim() : "");
		this.setProperty('hasImageId', new StringProperty(), this.image ? "Yes" : "No");
	}

	get name () {
		return this.surname + ', ' + this.forename;
	}

	setProperty (propName, propObj, value) {
		this[propName] = value;
		this[propName + 'Property'] = propObj;
		propObj.name = propName;
		propObj.value = value;
	}
}

class PlayerProperty {

	constructor (name, value) {
		this.name = name;
		this.value = value;
	}

	isSet () {
		return (typeof(this.value) != "undefined");
	}

	get value () { 
		return this._value; 
	}
	set value (value) { 
		this._value = value; 
	}

	get name () { return this._name; }
	set name (name) { this._name = name; }


}

class StringProperty extends PlayerProperty {

	isSet () {
		return (this.value.length > 0);
	}

	get value () { return this._value; }
	set value (value) { this._value = value ? value.trim() : ""; }

}

class NumericProperty extends PlayerProperty {

	get value () { return this._value; }
	set value (value) { this._value = value ? value : ""; }

}

class PlayerPropertySquadNo extends NumericProperty {

	constructor (value) { 
		super ('squadNo', value); 
	}

	isSet () {
		return ((Number(this.value) >= 1) && Number((this.value) <= 35));
	}

}