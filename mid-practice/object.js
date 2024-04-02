// const person = new Object();
// person.name = "Hanood";
// person.dept = "CS";


const person ={
    name:'Hanood',
    dep:'CS'
}


for (const key in person) {
    console.log(person[key]+" ");
}

// for (const key of person) {
//     console.log(key);
// it can not be iterable on objects}