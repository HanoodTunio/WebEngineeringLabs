const myPromise = new Promise(function(resolve, reject){

    let x = false;

    if (x){
        resolve("Promise resolved");
    }
    else{
        reject("Promise rejected ");
    }
});

myPromise.then(
    function(value){console.log(value)},
    function(value){console.log(value)}
)


new Promise(function(resolve, reject){
    setTimeout( () => {
        resolve("Sukkur IBA is the best.");
    } , 1000)
}).then(
    function(value){console.log(value);}
)


// reject and resolve with fecth API

const promise = new Promise(function(resolve, reject) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                data.forEach(element => {
                    console.log(element.id);
                });
                resolve("Promise resolved");
            } else {
                reject("Promise rejected");
            }
        })
        .catch(error => {
            reject("Promise rejected");
        });
});

promise.then(
    function(result) {
        console.log(result);
    },
    function(error) {
        console.error(error);
    }
);
