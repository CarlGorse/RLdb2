
class ViewSearchFilterItem {

	constructor (itemId) {
		this.itemId = itemId;
		this.selected == false;	
	}
	
	select () {
		this.selected = true;
	}

	deselect () {
		this.selected = false;
	}

}