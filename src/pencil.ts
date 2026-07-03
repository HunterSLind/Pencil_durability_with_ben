import { isAllUpperCase } from './util'

export class Pencil {
    defaultPencilDuarability: number = 13;
    durability: number;
    

    constructor(defaultDurability: number) {
        this.defaultPencilDuarability = defaultDurability;
        this.durability = this.defaultPencilDuarability;
    };

    writeOutput(char: string) {
        if (this.durability > 0) {
            return char;
        }
        return ' ';
    }

    sharpen() {
        this.durability = this.defaultPencilDuarability;
    }

    degradeByCharacter(char: string) {
        if (char !== ' ') {
            if (isAllUpperCase(char)) {
                this.durability -= 2;
            } else {
                this.durability -= 1;
            }
        }
    }
}


