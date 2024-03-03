function applyFunction(array, func) {
    return array.map(func);
}

// Test
const inputArray = [1, 2, 3];
const resultArray = applyFunction(inputArray, (x) => x * 2);
console.log(resultArray); 

