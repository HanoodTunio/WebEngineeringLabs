const prompt = require('prompt-sync')();

let str = prompt("Enter a string to check if it starts with 'Py' or not:");

function string_check(str){
    if (str === null || str === undefined || str.substring(0, 2) === 'Py')
        return str;

    else
        return "Py" + str;
}

console.log(string_check(str));