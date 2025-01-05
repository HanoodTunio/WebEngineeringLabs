function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1")
            resolve("Success")
        }, 4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 2")
            resolve("Success")
        }, 4000);
    });
}

console.log("Fetching Data 1")
let promise = asyncFunc1();
console.log(promise)
promise.then((data)=>{
    console.log(data)
    console.log("Fetching Data 2")
    let promise2 = asyncFunc2();
    promise2.then((data)=>{
        console.log(data)
    })
})

/*console.log("Fetching Data 2")
let promise2 = asyncFunc2();
console.log(promise)
promise.then((data)=>{
    console.log(data)
})*/

