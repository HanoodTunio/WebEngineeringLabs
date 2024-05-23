console.log("output 1");
console.error("output 2");
console.warn("output 3");

// TypeConversions
var numAsString = "10";
var numAsNumber = parseInt(numAsString);
console.log(numAsNumber + 20);

// Arrays
var colors = ["yellow", "green", "orange"];
console.log(colors);

// switch
var day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  default:
    console.log("It's neither Monday nor Tuesday.");
}

// Try Catch

try {
  // Code that may cause an error
  var x = y / 0; // This will cause a division by zero error
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}