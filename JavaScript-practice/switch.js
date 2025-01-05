let value = 'A';
let result;

switch (value) {
    case 'A':{
        let message = "It's A";
        result = message;  // Block scope for `message`
        console.log(result); // It's A
        break;
    }
        
    case 'B':{
        let message = "It's B";  // Block scope for `message` here too
        result = message;
        console.log(result);
        break;
    }
    case true:  // Switch can also match truthy/falsy values
        console.log("It's truthy!");
        break;
        
    default:
        console.log("No match found");
}
console.log(typeof message); // 'undefined' as message is block-scoped within each case


let x = '5';

switch (x) {
    case 5:
        console.log("Number 5");
        break;
    case '5':
        console.log("String 5");
        break;
    default:
        console.log("No match");
}


let num = 10;

switch (num) {
    case 5 + 5:
        console.log("Equal to 10");
        break;
    case 20 / 2:
        console.log("Also equal to 10");
        break;
    default:
        console.log("No match");
}

