// var x = 10;
// var y = 5;
// total = x+y;
// document.write(total)

// function sum() {
//     var x = 10;
//     var y = 5;
//     total = x + y;
//     document.write(total)
//     document.write("<br>");
// }
function sum( x, y) {
    total = x + y;
    document.write(total)
    document.write("<br>");
}

sum(12, 3);
var fruits = ["Apple", "Orange", "Banana", "Melon"];
//document.write(fruits);
fruits.push("watermelon");
//fruits.pop();
document.write(fruits);


const greet = (name) => {
    return ' Hello, ' + name + '! I am Arrow function.. ';
};
document.write(greet(" Hanood"))


const greet2 = function(name) {
    return ' Hello, ' + name + '! I am Anonymous Functions';
};
document.write(greet2(" Hanood"))