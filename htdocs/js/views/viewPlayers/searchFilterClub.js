
class ViewSearchFilterClub extends ViewSearchFilter{

	constructor (elementId, displayProperty)
	{
		super ( elementId, data.clubs, displayProperty, 'clubId', false);
	}

	render() {
		ViewSearchFilter.prototype.render.call(this);
		let c = this.selectedDataItem();
		if (c)
		{
			viewPlayers.elements.cImage.setImage("images\\clubs\\" + c.image);
		}
		else {
			viewPlayers.elements.cImage.clear();
		}
	}

}