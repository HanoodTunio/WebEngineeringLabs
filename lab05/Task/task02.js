
function carInfo(object){
    console.log("The "+ object.brand +" "+ object.model +" " + "was manufactured in " + 2022)
}


let obj = {
    'brand': 'Toyota',
    'model': 'Camry', 
    'year': 2022 
}

console.log(carInfo(obj))