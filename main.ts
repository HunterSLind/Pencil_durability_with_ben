export let paper: string = "";

let durability: number = 10;


export function write(text: string) {
    paper += text;
    for (let i: number = 0; i < text.length; i++) {
        durability -= 1
    }
    
}



export function getDurability(): number {
    return durability;
}












export function clear() {
    paper = "";
    durability = 10;
}