export let paper: string = "";

let defaultDurability = 13;
let durability: number = defaultDurability;


export function write(text: string) {
    for(let i : number = 0; i < text.length; i++ ){
        let letterToWrite = text[i];
        
        if (durability > 0) {
            paper += letterToWrite;
        }
        else {
            paper += " ";
        }
        durability -= 1;
    }
}



export function getDurability(): number {
    return durability;
}












export function clear() {
    paper = "";
    durability = defaultDurability;
}