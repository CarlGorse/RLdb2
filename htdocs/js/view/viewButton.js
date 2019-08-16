
function ViewButton(elementId)
{
    ViewElement.call(this, elementId);
}
ViewButton.prototype = Object.create(ViewElement.prototype)

ViewButton.prototype.setOnClick = function(func) {
    this.element.onclick = func;
}