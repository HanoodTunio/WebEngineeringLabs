function reverseArray (array){
    
    let newArray = [];

    for ( let i = array.length-1; i >= 0; i--){
        newArray.push(array[i])
    }

    return newArray
}

let array = [1, 2, 3, 4];
let newArray = reverseArray(array)
console.log(newArray)