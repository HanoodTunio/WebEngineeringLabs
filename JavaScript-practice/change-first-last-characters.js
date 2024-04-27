const prompt = require("prompt-sync")();

let str = prompt("Enter a string to change the first and last characters: ");

function change_str(str) {
    if (!str || str.length < 1) 
        return "Operation cannot be performed on an empty string.";
    else {
        let str2 = str[0];
        let strArray = str.split(""); // Convert string to array to change characters
        strArray[0] = str[str.length - 1];
        strArray[strArray.length - 1] = str2;
        return strArray.join(""); // Convert array back to string
    }
}

console.log(change_str(str));
