export let paper: string = "";

let defaultDurability = 13;
let durability: number = defaultDurability;


export function write(text: string) {
    if (durability > 0) {
        paper += text;
    }
    else {
        for( let i : number = 0; i < text.length; i++) {
        paper += " "
        }
    }
    durability -= text.length;
}



export function getDurability(): number {
    return durability;
}












export function clear() {
    paper = "";
    durability = defaultDurability;
}