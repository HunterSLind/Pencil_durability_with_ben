import { isAllUpperCase } from './util'

export class Pencil {
    durability: number = 13;

    constructor(durability: number) {
        this.durability = durability;
    };

    canWrite(): boolean {
        return this.durability > 0;
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


