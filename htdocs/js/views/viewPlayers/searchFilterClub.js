
class ViewPlayersSearchFilterClub extends ViewPlayersSearchFilter{

	constructor (parameters)
	{
		parameters.dataSet = data.clubs;
		parameters.searchProperty = 'clubId';
		parameters.showOptionNone = false;
		super (parameters);
	}

	render() {
		
		ViewPlayersSearchFilter.prototype.render.call(this);

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