//let arr1 = [1, 5, 2, 6, 1, 2, 3, 4, 5, 6, 2];
let arr1 = ["Orange", "Banana", "Mango", "Banana", "Apple", "Orange", "Orange"]
let ele = {};
// obj['1'] = 100
// console.log(obj)
// obj['1']++
// console.log(obj)
// if(obj['1'])
//     console.log("key found")
// else
//     console.log("Not found")

// console.log(obj['0'])

// for (const key in arr1) {
//     const element = arr1[key];
//     if (ele[element]) {
//         ele[element]++   
//     }
//     else{
//         ele[element] = 1
//     }
// }
// console.log(ele)

let array = [
    {'id': 1, 'name': "Hanood"},
    {'id': 2, 'name': "Sana"},
    {'id': 3, 'name': "Sidra"},
    {'id': 1, 'name': "Hanood"},
    {'id': 2, 'name': "Sana"},
    {'id': 3, 'name': "Sidra"},
    {'id': 1, 'name': "Hanood"},

];
let obj = {};

for (const key in array) {
    var element = array[key];
    if (element['id']) {
        obj[key]++  
    }
    else{
        obj[key] = 1
    }
}
console.log(obj)


