import { isAllUpperCase } from './util'

export class Pencil {
    defaultDurability: number;
    durability: number;
    length: number;
    eraser: number;

    constructor(defaultDurabilty?: number, length?: number, eraser? : number) {
        this.defaultDurability = defaultDurabilty ?? 40000;
        this.durability = this.defaultDurability;
        this.length = length ?? 1;
        this.eraser = eraser ?? 100;
    };

    writeOutput(char: string) {
        if(this.durability > 0) {
            return char;
        }
        return " ";
    }
    
    sharpen() {
        if (this.length > 0) {
        this.durability = this.defaultDurability;
        this.length -= 1
        }
    }

    erase(text: string, textToErase: string) {
        let index = text.lastIndexOf(textToErase);;
        let spaces: string;
        let result: string;
        if(textToErase.length < this.eraser) {
            spaces = " ".repeat(textToErase.length);
            result = text.slice(0, index) + spaces;
            this.eraser -= textToErase.length
        } else {
            spaces = " ".repeat(this.eraser)
            result = text.slice(0, index - this.eraser) + spaces;
        }
        return result;
    }
    
    edit(text: string, textToAdd: string) {
        let index = text.indexOf(" ")
        return text.slice(0, index + 1) + textToAdd
    }

    degradeByCharacter(char: string) {
        if(char != " "){
            if(isAllUpperCase(char)){
                this.durability -= 2;
            }
            else{
                this.durability -= 1;
            }
        }
    }
}


