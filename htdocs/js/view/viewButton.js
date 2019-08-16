
function ViewButton(elementId, func)
{
    ViewElement.call(elementId);
}
ViewButton.prototype = Object.create(ViewElement.prototype)

ViewButton.prototype.setOnClick = function(func) {
    this.element.onclick = func;
}