let numbers = [1, 2, 3, 4];
let result = numbers.splice(1, 2, 10, 20);
console.log(result);
console.log(numbers);


let arr = [1, 2, 3];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();
console.log(arr);


let arr2 = ['x', 'y', 'z'];
arr2.length = 5;
console.log(arr2);

if( NaN == NaN){
    console.log("this is me")
}
if( null == undefined){
    console.log("this is me")
}
