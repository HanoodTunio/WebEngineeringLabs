let infinity = 1/0
console.log(infinity)

console.log("abc" * 2)
console.log(NaN *NaN)
console.log(NaN * "abc")

console.log(parseInt(infinity))

let a = 10.34
console.log("convert into a Int", parseInt(a))
console.log("convert into a Flaot", parseFloat(a))

let str = "Hanood"
let str1 = "Tunio"
let userName = `Hello, ${str} ${str1}`
console.log(userName)

console.log('5'-'2'+'3') // 3 concatenate 3 so the answer is 3
console.log('10' + '20' - '30'); //1020 - 30 = 990
console.log(5+'10'+2); // 5102
console.log('5' * '2' + '3' - 1); // 10 concatenate with 3 103 then minus 1 result 102
console.log(5 + 5 + '5'); // 5+5 then concatenate 105
console.log('5' + 2 + 3); // 523
console.log(Number(null)); //  0
console.log(typeof Infinity); //  number
console.log(typeof NaN) //  number
console.log('hello'*'2') //NaN
console. log(3 + + "3"); //6
console. log('3' + + 3); //33
console.log(undefined + 1)
console.log(Number(' '))
console.log(Boolean(' '))

let x = null;
let y 
console.log(x ?? y)

console.log(" " && "Returned")
