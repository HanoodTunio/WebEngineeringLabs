let sum = 0;

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach(myfunction);


// numbers.forEach(function(number){
//     console.log(number);
// })

function myfunction(items){
    sum += items
}

console.log(sum)

const array = numbers.map(mapFunction);
function mapFunction(number){
    console.log(number*10);
}