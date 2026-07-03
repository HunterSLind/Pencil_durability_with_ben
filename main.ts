export let paper: string = "";

let durability: number = 10;


export function write(text: string) {
    paper += text;

    durability -= text.length;
}



export function getDurability(): number {
    return durability;
}












export function clear() {
    paper = "";
    durability = 10;
}