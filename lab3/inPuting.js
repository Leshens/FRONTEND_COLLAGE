const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
        console.log(parseInt(input.split(" ")[0])+parseInt(input.split(" ")[1]));
});