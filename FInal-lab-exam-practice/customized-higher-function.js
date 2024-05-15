//customized map higher order function
const number = [1, 2, 3, 4, 5];

function customizedFunction(array, customeFunction){
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(customeFunction(array[i]));
    }
    return newArray;
}

const result = customizedFunction(number, function(item){
    return item * 2;
});

console.log(result);

//customized filter higher order function
function filterFunction(array, customeFunction){
    const newArray = [];
    for(let i = 0 ; i < array.length; i++){
        if(customeFunction(array[i])%2 == 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const result2 = filterFunction(number, function(item){
    return item;
});
console.log(result2);

//customized sum higher order function
function sumFunction(array, customeFunction){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += customeFunction(array[i]);
    }
    return sum;
}

const result3 = sumFunction(number, function(item){
    return item;
});
console.log(result3);


// custom reduce higher order function
function reduceFunction(array, customeFunction, initialValue){
    let sum = initialValue;
    for(let i = 0; i < array.length; i++){
        sum = customeFunction(sum, array[i]);
    }
    return sum;
}

const result4 = reduceFunction(number, function(sum, item){
    return sum + item;
}, 5);
console.log(result4);
