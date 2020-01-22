const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let turn = 'x';
let spaces = {
    '1':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9
}
let board = () => {
    return (`
       |   |  
     ${spaces[1]} | ${spaces[2]} | ${spaces[3]}
    ___|___|___
       |   |
     ${spaces[4]} | ${spaces[5]} | ${spaces[6]}
    ___|___|___
       |   |  
     ${spaces[7]} | ${spaces[8]} | ${spaces[9]}
       |   |  
    `);
}

console.log(board());
let takeTurn = () => {
    rl.question(`Turn ${turn}. Where place marker? `, function(location) {
        if (typeof spaces[location] !== 'number') {
            console.log('Pick an untaken space');
            console.log(board());
            takeTurn();
        } else {
            console.log(spaces[location]);
            spaces[location] = turn;
            console.log(spaces[location]);
            if(turn === 'x') {
                turn = 'o';
            } else {
                turn = 'x';
            }
            console.log(board());
            takeTurn();
        }
    });
};
takeTurn();

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});