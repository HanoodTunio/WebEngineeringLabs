// promise one
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, Cryptography, network

    setTimeout(function(){
        console.log('Async task is completed..')
        resolve();
    }, 4000)
});


promiseOne.then(function(){

    console.log('promise consumed')
})

//promise two
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 02');
        resolve();
    }, 5000);
}).then(function(){
    console.log('Async task02 resolved..')
});



// promise three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: 'hanood', email: 'hanood.tunio@gmail.com'})
    }, 6000)
})

promiseThree.then(function(user){
        console.log(user);
})


// promise four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){

        let error = true;
        if (!error) {
            resolve({username: "Humera", age: 22});
        } else {
            reject('Error something went wrong!')
        }
    }, 7000)
})

 promiseFour.then((user ) =>{
    console.log(user);
    return user.username;
} ).then((myname)=>{
    console.log(myname);
}).catch(function(error){
    console.log(error);
}).finally( () => console.log('The promise is either resolved or rejected.'))


// promise 5
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = false;
        if (!error) {
            resolve({username: 'JavaScript', password: "12345"})
        } else {
            reject(new Error('Error JS went wrong.')); 
        }
    }, 8000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.error(error.message);
    }
}
consumePromiseFive();


