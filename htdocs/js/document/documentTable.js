
class DocumentTable extends DocumentElement {

    constructor (elementId) {
        super (elementId);
    }
    
    clear () {
        while (this.element.rows.length > 1)
        {
            this.element.deleteRow(this.element.rows.length - 1);
        }
    }

    insertRow () {
        return this.element.insertRow();
    }

}