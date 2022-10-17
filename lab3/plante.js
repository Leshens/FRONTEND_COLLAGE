const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    parseFloat(input)
    rl.on('line', (input2) => {
        const earth = 31556926;
        switch(input2){
            case "Ziemia":
                console.log((input/earth).toFixed(2));
                break;
            case "Merkury":
                console.log((input/(0.2408467*earth)).toFixed(2));
                break;
            case "Wenus":
                console.log((input/(earth*0.61519726)).toFixed(2));
                break;
            case "Mars":
                console.log((input/(earth*1.8808158)).toFixed(2));
                break;
            case "Jowisz":
                console.log((input/(earth*11.862615)).toFixed(2) );
                break;
            case "Saturn":
                console.log((input/(earth*29.447498)).toFixed(2));
                break;
            case "Uran":
                console.log((input/(earth*84.016846)).toFixed(2));
                break;
            case "Neptun":
                console.log((input/(earth*164.79132)).toFixed(2));
                break;
        }

    });
});