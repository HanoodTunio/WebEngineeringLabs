
const person = {
    name: 'John',
    age: 30
};

console.log(Object.keys(person));
console.log(Object.values(person));

// Enumerable properties

Object.defineProperty(person, 'email',{
    value: 'hanood.tunio@gmail.com',
    enumerable: true
});

Object.defineProperty(person, 'phone',{
    value: '0333-1234567',
    enumerable: false
});

for (const key in person) {
    console.log(key, person[key]);
}

console.log(Object.getOwnPropertyNames(person));
console.log("Returns an array of a given object's");
console.log(Object.entries(person));

console.log("Assign method..");
const person2 = {};
Object.assign(person2, person);
console.log(person2);

// freeze method
console.log("Freeze method..");
Object.freeze(person);
person.name = 'Ali';
delete person.name;
console.log(person);

// seal method
console.log("Seal method..");
Object.seal(person2);
person2.name = 'Ali';
console.log(person2);


// Object to be destructured
const person3 = {
    username: 'John',
    age: 30,
    city: 'New York'
};
// Destructuring assignment
const { username, age, city } = person3;
// Output the destructured values // Output: John
console.log(username);
console.log(age);
console.log(city); 

