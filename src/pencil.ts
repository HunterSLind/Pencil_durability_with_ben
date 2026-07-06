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
    
    edit(text: string, newText: string) {
        const index = text.indexOf("  ");
        const fragment = text.slice(index);
        return text.slice(0, index + 1) + this.editNewStringToAdd(fragment, newText);
    }

    editNewStringToAdd(originalTextFragment: string, newText: string ) {
        const maxLen = Math.max(originalTextFragment.length, newText.length);
        const newTextArray: string[] = [];

        for (let i = 0; i < maxLen; i++) {
            newTextArray[i] = this.editCharToWrite(originalTextFragment[i], newText[i])
        }
        return newTextArray.join("")
    }

    editCharToWrite(orginialCharacter: string, newCharacter: string ) {
        if ((orginialCharacter === ' ' || orginialCharacter === '') && newCharacter !== '') {
                return newCharacter;
            } else if (newCharacter === '') {
                return orginialCharacter;
            } else if (orginialCharacter === newCharacter) {
                return orginialCharacter;
            } else {
                return '@';
            }
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


