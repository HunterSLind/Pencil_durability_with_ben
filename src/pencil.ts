import { isAllUpperCase } from './util'

export class Pencil {
    defaultDurability: number;
    durability: number;
    length: number;

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

    degradeByCharacter(char: string) {
        if(char != " "){
            if(isAllUpperCase(char)){
                this.durability -= 2
            }
            else{
                this.durability -= 1;
            }
        }
    }
}


