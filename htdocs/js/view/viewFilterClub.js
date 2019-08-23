
function ViewFilterClub(elementId, displayProperty)
{
	ViewFilterSelect.call(this, elementId, data.clubs, displayProperty, 'clubId');
	this.showOptionNone = false;
}
ViewFilterClub.prototype = Object.create(ViewFilterSelect.prototype)

ViewFilterClub.prototype.render = function ()
{
	ViewFilterSelect.prototype.render.call(this);
	c = this.selectedDataItem();
	if (c)
	{
		view.elements.cImage.setImage("images\\clubs\\" + c.image);
	}
	else {
		view.elements.cImage.clear();
	}
}