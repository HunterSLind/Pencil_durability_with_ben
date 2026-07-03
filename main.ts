export let paper: string = "";

let defaultDurability = 13;
let durability: number = defaultDurability;

const isAllUpperCase = (str: string): boolean => {
  return str === str.toUpperCase();
};

export function write(text: string) {
    for(let i : number = 0; i < text.length; i++ ){
        let letterToWrite = text[i];
        
        if (durability > 0) {
            paper += letterToWrite;
        }
        else {
            paper += " ";
        }
        if(letterToWrite != " "){
            if(isAllUpperCase(letterToWrite)){
                durability -= 2
            }
            else{
                durability -= 1;
            }
            
        }
        
    }
}



export function getDurability(): number {
    return durability;
}












export function clear() {
    paper = "";
    durability = defaultDurability;
}