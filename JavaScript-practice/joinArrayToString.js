// Define the array
var myColor = ["Red", "Green", "White", "Black"];


let joinedString = myColor.reduce((accumulator, currentValue, currentIndex) => {

    accumulator += currentValue;
    
    if (currentIndex !== myColor.length - 1) {
        accumulator += ", ";
    }

    return accumulator;
}, "");

// Print the joined string
console.log(joinedString);
