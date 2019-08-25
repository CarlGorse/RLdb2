
class DocumentButton extends DocumentElement {

    constructor (name, setOnClick) {
        super (name);
        this.element.onclick = setOnClick;
    }

    disable () {
        this.element.disabled = true;
    }

    enable () {
        this.element.disabled = false;
    }

    setOnClick (func) {
        this.element.onclick = func;
    }

}