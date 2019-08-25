
class ViewSearchFilter extends DataSelect {

	constructor (elementId, dataSet, displayProperty, searchProperty, showOptionNone = true)
	{

		super (elementId, dataSet, displayProperty);
		
		viewPlayers.filters.items.push(this); 
		
		this.element.onchange = function() {
			viewPlayers.events.changeFilter(this);
		}
		
		this.searchProperty = searchProperty;
		
		this.setInitialValueEmpty = false;
		this.showNonMatchingDataItems = true;
		this.showDataItemCount = true;
		this.includeInPlayerCount = true;

		this.showOptionAll = true;
		this.showOptionNone = showOptionNone;

	}

	select (dataItemId)
	{
		this.setValue(dataItemId);
	}

	playerCount (filterItemValue) {

		var count = 0;

		data.players.items.forEach (
			function (p)
			{

				// query player count for di, then loop through filters <> f and query each for player count by value

				var isMatch = true;

				if (filterItemValue == "none")
				{
					if (p[this.searchProperty + 'Property'].isSet()) {
						isMatch = false;
						return;
					}
				}

				if ((p[this.searchProperty] != filterItemValue) && (filterItemValue != "none")) {
					isMatch = false;
					return;
				}

				viewPlayers.filters.items.forEach (
					function (f2) { 
						if (f2.elementId == this.elementId) return;
						if (f2.includeInPlayerCount == false) return;
						if (f2.value == "none")
						{
							if (p[f2.searchProperty + 'Property'].isSet()) {
								isMatch = false;
								return;
							}
						}
						if ((f2.value != "") && (f2.value != "all") && (f2.value != "none"))
						{
							if (p[f2.searchProperty] != f2.value) {
								isMatch = false;
								return;
							}
						}
					}, this
				)

				if (isMatch) count += 1;
			}, this
		)

		return count;
	}	

	render () {
		
		let currentValue = this.value;

		this.clear();
		
		if (this.showOptionAll)
		{
			var option = document.createElement("option");
			option.text = '[all]';
			option.value = 'all';
			this.element.add(option);
		}

		if (this.showOptionNone)
		{
			var option = document.createElement("option");
			option.text = '[none]';
			option.value = 'none';
			var count = this.playerCount("none");
			if (count > 0)
				option.text += " (" + count + ")";
			this.element.add(option);
		}

		this.dataSet.items.forEach(
			function (di) {

				var playerCount = this.playerCount(di[this.searchProperty]);
				if ((this.showNonMatchingDataItems) || (playerCount > 0))
				{
					var option = document.createElement("option");
					option.text = di[this.displayProperty];

					if (this.showDataItemCount)
					{
						if (playerCount > 0)
							option.text += " (" + playerCount + ")";
					}

					option.value = di.id;
					
					this.element.add(option);
				}

			}, this
		)

		if (this.element.options.length > 0)
			this.element.options[0].selected = 'selected';

		if (this.setInitialValueEmpty)
			this.clearValue();
		else {
			if (currentValue)
				this.selectOptionByValue(currentValue);
		}

	}

}