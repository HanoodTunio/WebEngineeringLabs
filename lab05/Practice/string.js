// let str = "Hello to the future"
// document.write("length of the String is :" + str.length +"..")
// document.write("Char at 3 index: "+ str.charAt(3))

// console.log("Combine two Strings")
// let str1 = "Hanood"
// let str2 = " Mumtaz Ali"
// let str3 = " Tunio"
// console.log(str1.concat(str2, str3))

// let str4 = "Hello, world!";
// let index = str4.indexOf("o");
// console.log("Index of 'o':", index); 

// let str5 = "Hello, world!";
// let index1 = str5.indexOf("o", 5);
// console.log("Index of 'o':", index1); 

// let str6 = "Hello, world!";
// let index2 = str6.lastIndexOf("o");
// console.log("Index of 'o':", index2); 

// let str7 = "Hello, world!";
// let index3 = str7.lastIndexOf("o", 5);
// console.log("Index of 'o':", index3);

// console.log(str7.slice(3, 8));
// console.log(str7.substring(3, 9));

let str = "Hello, world!";

console.log(str.slice(7, 12)); // Output: world
console.log(str.substring(7, 12)); // Output: world

console.log(str.slice(-6)); // Output: world!
console.log(str.substring(-6)); // Output: Hello, world!

console.log(str.slice(12, 7)); // Output: ""
console.log(str.substring(12, 7)); // Output: world


console.log(str.startsWith("Hello"));
console.log(str.startsWith("hello"));

console.log(str.endsWith("world!"));
console.log(str.endsWith("World!"));
