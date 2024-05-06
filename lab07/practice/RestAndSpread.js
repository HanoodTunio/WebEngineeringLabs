
// Rest example
function addNumber(a, b, c, ...other){
    console.log(other)
    let result = a+b+c;

    other.forEach(element => {
        result +=element
    });

    return result;
}


console.log(addNumber(3,4,5,6,7,8,9));


// Spread Example

let names = ["Hanood", "Humera", "Maireen"];
 
function getNames(name1, name2, name3){
    console.log(name1, name2, name3);
}

// getNames(names[0], names[1], names[2]);
// or
getNames(...names);
getNames(names);    


// rest with objects 

let students = {
    name: "Allam",
    age: 27,
    hobbies: ["chess", "coding", "reading"]
}

// const {age, name} =students;
// console.log(age, name);

const {...rest} = students;
console.log(rest);

// spread

let newStudent = {
    ...students,
    age: 29
}

console.log(newStudent)