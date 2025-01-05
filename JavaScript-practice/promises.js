let promise = new Promise((resolve, reject) => {
    console.log("I am a promise")
    resolve("Success")// Promise result Success
})
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise")
        //resolve("Success")
        reject("Error")
       
    })
}

let promise2 = getPromise();
promise2.then(() => {
    console.log("Promise 2 resolved")
})
.catch(() => {
    console.log("Promise 2 rejected")
})

/*function getData(dataId, getNextdata){
    return new Promise((resolve, reject) => {
        setTimeout( ()=>{
            console.log("data", dataId)
            resolve("Success")
            if (getNextdata){
                getNextdata();
            }
        },4000)
    }) 
}

getData(123)*/