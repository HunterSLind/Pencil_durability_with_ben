export class Paper {
    text: string;

    constructor() {
        this.text = "";
    }

    append(newText: string) {
        this.text += newText;
    }
}