const obj1 = { a: 10, b: 20 };
const obj2 = obj1;
obj2.a = 50;
console.log(obj1.a);


//The spread operator creates a shallow copy of obj1 and then overrides the property b with the value 10.
let obje1 = { a: 1, b: 2 };
let obje2 = { ...obj1, b: 10 };
console.log(obje2.b);
