const prompt = require('prompt-sync')();

let num1 = prompt("Enter a number: ");
num1 = parseFloat(num1);

let num2 = prompt("Enter 2nd number: ");
num2 = parseFloat(num2);

function testNumber(x, y) {
    return ((x === 50 || y === 50) || (x + y === 50));
}

console.log(testNumber(num1, num2));
