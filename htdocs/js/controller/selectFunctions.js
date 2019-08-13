

function SelectFunctions()
{
}
SelectFunctions.prototype.selectOptionByValue = function(thisSelect, value) {
	for (var i = 0; i < thisSelect.options.length; i ++)
	{
		o = thisSelect.options[i];
		if (o.value == value)
		{
			thisSelect.options[o.index].selected = 'selected';
			break;
		}
	}
}