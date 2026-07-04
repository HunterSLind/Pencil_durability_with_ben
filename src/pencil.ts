import { isAllUpperCase } from './util'

export class Pencil {
    defaultDurability: number;
    durability: number;
    length: number;
    eraser: number = 100;

    constructor(defaultDurabilty?: number, length?: number) {
        this.defaultDurability = defaultDurabilty ?? 40000;
        this.durability = this.defaultDurability;
        this.length = length ?? 1;
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
        const index = text.lastIndexOf(textToErase);
        const spaces = " ".repeat(textToErase.length);
        const result: string = text.slice(0, index) + spaces;
        return result
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


