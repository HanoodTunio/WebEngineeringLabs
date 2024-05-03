const prompt = require('prompt-sync')();

let number = prompt("Enter a number to insert dashes (-) between each pair of even numbers: ");

let array = number.split('');

let result = '';

for (let index = 0; index < array.length-1; index++) {

    result += array[index];
    if ((parseInt(array[index])%2 === 0) && (parseInt(array[index])%2 === 0)){
        result += '-';
    }
    
}

console.log("Result:", result);
