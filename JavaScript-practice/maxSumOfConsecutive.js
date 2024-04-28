const prompt = require('prompt-sync')();

let size = prompt("Enter array size: ");
let array = new Array(parseInt(size));

console.log("Enter elements separated by spaces: ");

let input = prompt().split(' ');

for(let i = 0; i < size; i++) {
    array[i] = parseInt(input[i]);
}

function maxSumOfConsecutive(array) {
    let sum = [];
    for(let i = 0; i < size - 1; i++) {
        sum[i] = array[i] + array[i+1];
    }

    sum[size - 1] = array[size - 1]; 

    return Math.max(...sum);
}

console.log("Maximum sum of consecutive numbers:", maxSumOfConsecutive(array));
