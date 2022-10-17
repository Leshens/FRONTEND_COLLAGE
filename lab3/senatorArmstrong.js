const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    parseInt(input);
    let numberOfDigits = input.length;
    let sum = 0;

    for (i = 0; i < numberOfDigits; i++) {
        sum += Math.pow(input.charAt(i), numberOfDigits);
    }

    if (sum === input) {
        console.log(true);

    } else {
        console.log(false);
    }
});
