import { Paper } from "./paper";
import { Pencil } from "./pencil";

export class Writer {
    pencil: Pencil;
    paper: Paper;


    constructor(pencil: Pencil, paper: Paper) {
        this.pencil = pencil;
        this.paper = paper;
    }

    write(text: string) {
        for (let i: number = 0; i < text.length; i++) {
            let letterToWrite = this.pencil.writeOutput(text[i]);
            this.paper.append(letterToWrite);
            this.pencil.degradeByCharacter(letterToWrite);
        }
    }
}