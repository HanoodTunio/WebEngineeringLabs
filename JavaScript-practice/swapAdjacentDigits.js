const prompt = require('prompt-sync')();

let num = prompt("Enter any number: ");

function swapAdjacentDigits(num) {
    if (num.length % 2 === 0) {
        if (num.length === 0) {
            console.log("Can not swap the digits..");
            return;
        } else {
            let swapped = '';
            for (let i = 0; i < num.length; i += 2) {
                swapped += num[i + 1] + num[i];
            }
            console.log("Swapped Number: ", swapped);
            return swapped;
        }
    } else {
        return "The length is odd";
    }
}

swapAdjacentDigits(num);
