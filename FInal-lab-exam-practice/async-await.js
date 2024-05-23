async function myFunction() {
    return "Hello";
}

myFunction()
    .then(function(value) {
        console.log(value);
    })
    .catch(function(error) {
        console.log(error);
    });
