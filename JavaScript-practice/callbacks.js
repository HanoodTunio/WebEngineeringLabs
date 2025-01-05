function hello(){
    console.log("Hello World")
}

setTimeout(hello, 0) // 2 seconds



function sum(a, b) {
    console.log(a+b)
}   
function calculate(a, b, callback) {
    return callback(a, b);
}
console.log(calculate(10, 20, sum)); // 30


function getData(dataId, getNextdata){
    setTimeout( ()=>{
        console.log("data", dataId)
        if(getNextdata){
            getNextdata();
        }
    },4000)
}

getData(1, () => {
    console.log("getting data 2...")
    getData(2, () =>{
        console.log("getting data 3...")
        getData(3, () =>{
            console.log("getting data 4...")

            getData(4)
        })
    })
})

/*let promise = new Promise((resolve, reject) => {
    console.log("O am a promise")
    resolve("Success")
})

function gettingData(cf){
    let data;
    setTimeout(function(){ 
        data = "Data from the server"
        cf(data)
    }, 3000)
    return data;
}
console.log("A")
gettingData(function(){
    console.log(data)
})
console.log("B");*/



