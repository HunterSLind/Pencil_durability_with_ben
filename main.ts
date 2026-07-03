export let paper: string = "";


export function write(text: string) {
    paper += text;
}

export function clear() {
    paper = "";
}