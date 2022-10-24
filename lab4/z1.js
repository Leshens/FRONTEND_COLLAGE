const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {

    const arr = input.split(" ").map(elem=> parseInt(elem, 10))
    console.log(arr)
});