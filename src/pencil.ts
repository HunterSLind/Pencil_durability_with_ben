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
        const index = text.indexOf("  ");
        const fragment = text.slice(index); // tail starting at the first double-space

        // if there's no letter in the tail, simply insert the new text at the first space
        const hasLetter = !!fragment.match(/[a-zA-Z]/);
        if (!hasLetter) {
            return text.slice(0, index + 1) + textToAdd;
        }

        const maxLen = Math.max(fragment.length, textToAdd.length);
        const replaced: string[] = [];

        for (let i = 0; i < maxLen; i++) {
            const orig = fragment[i] ?? '';
            const added = textToAdd[i] ?? '';

            if ((orig === ' ' || orig === '') && added !== '') {
                // write into whitespace (or beyond fragment) when new char exists
                replaced[i] = added;
            } else if (added === '') {
                // no new char to write -> keep original (could be space or a character)
                replaced[i] = orig;
            } else if (orig === added) {
                // same character -> keep it
                replaced[i] = orig;
            } else {
                // collision with a different non-space character -> mark with '@'
                replaced[i] = '@';
            }
        }

        return text.slice(0, index + 1) + replaced.join('');
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


