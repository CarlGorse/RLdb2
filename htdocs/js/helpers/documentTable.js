
function DocumentTable(elementId)
{
    DocumentElement.call(this, elementId);
}
DocumentTable.prototype = Object.create(DocumentElement.prototype)

DocumentTable.prototype.clear = function () {
    while (this.element.rows.length > 1)
    {
        this.element.deleteRow(this.element.rows.length - 1);
    }
}

DocumentTable.prototype.insertRow = function () {
    return this.element.insertRow();
}