const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let turn = 'x';
let spaces = {
    '1':'1',
    '2':'2',
    '3':'3',
    '4':'4',
    '5':'5',
    '6':'6',
    '7':'7',
    '8':'8',
    '9':'9'
}
let board = `
   |   |  
 ${spaces[1]} | ${spaces[2]} | ${spaces[3]}
___|___|___
   |   |
 ${spaces[4]} | ${spaces[5]} | ${spaces[6]}
___|___|___
   |   |  
 ${spaces[7]} | ${spaces[8]} | ${spaces[9]}
   |   |  
`;

console.log(board);
rl.question("Turn x. Where place marker? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});