
let readline = require("readline");
let Latch = require("./latch.js");
let latch = new Latch(0, 1)

let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    terminal : false 
});

let clock = 1000;
let S = 0;
let R = 0;

let iter = setInterval(() => {
    latch.bulid(S, R);
}, clock);

rl.on("line", (line) => {
    if(line == "result") {
        console.log(latch.Q + ", " + latch.not_Q);
    
    } else {
        [S, R] = line.split(" ").map(v => Number(v)); 
    }
});