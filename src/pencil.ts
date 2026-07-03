import { isAllUpperCase } from './util'

export class Pencil {
    durability: number = 13;

    constructor(durability: number) {
        this.durability = durability;
    };

    writeOutput(char: string) {
        if(this.durability > 0) {
            return char;
        }
        return " ";
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


