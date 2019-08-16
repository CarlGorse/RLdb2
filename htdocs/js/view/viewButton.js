
function ViewButton(elementId)
{
    ViewElement.call(this, elementId);
}
ViewButton.prototype = Object.create(ViewElementButton.prototype)

ViewButton.prototype.setOnClick = function(func) {
    this.element.onclick = func;
}