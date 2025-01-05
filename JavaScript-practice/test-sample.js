// function add(a, b){
//     return a+b;
// }

// console.log(add);
// console.log(add(4,5));


// let sum = function (a, b){
//     return a+b;
// }

// console.log(sum);
// console.log(sum(4,5));

let a = 10;

function outer(){
    a = 100;
    function inner(){

        console.log(a);
    }
    return inner;
}

let returnFunction = outer();

a = 20;

returnFunction();